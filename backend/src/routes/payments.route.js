// routes/payments.js
import express from "express"
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Booking = require('../models/Booking');
const { generateQRCode } = require('../utils/qrGenerator');
const { inngest } = require('../utils/inngest');
const router = express.Router();

// Create Stripe checkout session
router.post('/create-session/:bookingId', async (req, res) => {
  try {
    const booking = await Booking.findOne({ bookingId: req.params.bookingId }).populate('museumId');
    
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'inr',
          product_data: {
            name: `Museum Ticket - ${booking.museumId.name}`,
            description: `${booking.numberOfTickets} tickets for ${booking.visitDate.toDateString()}`
          },
          unit_amount: booking.totalPrice * 100 // Convert to paise
        },
        quantity: 1
      }],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}&booking_id=${booking.bookingId}`,
      cancel_url: `${process.env.FRONTEND_URL}/payment-cancel?booking_id=${booking.bookingId}`,
      metadata: {
        bookingId: booking.bookingId
      }
    });

    booking.paymentIntentId = session.id;
    await booking.save();

    res.json({ url: session.url });
  } catch (error) {
    console.error('Payment session creation error:', error);
    res.status(500).json({ error: 'Failed to create payment session' });
  }
});

// Handle successful payment
router.get('/success/:sessionId', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.params.sessionId);
    const bookingId = session.metadata.bookingId;
    
    const booking = await Booking.findOne({ bookingId }).populate('museumId');
    
    if (booking && session.payment_status === 'paid') {
      booking.status = 'confirmed';
      
      // Generate QR Code
      const qrData = {
        bookingId: booking.bookingId,
        userName: booking.userName,
        museumName: booking.museumId.name,
        visitDate: booking.visitDate.toISOString(),
        numberOfTickets: booking.numberOfTickets,
        totalPrice: booking.totalPrice
      };
      
      booking.qrCode = await generateQRCode(JSON.stringify(qrData));
      await booking.save();
      
      // Send confirmation email using Inngest
      await inngest.send({
        name: 'booking.confirmed',
        data: {
          bookingId: booking.bookingId,
          userEmail: booking.userEmail,
          userName: booking.userName,
          museumName: booking.museumId.name
        }
      });
      
      res.redirect(`${process.env.FRONTEND_URL}/my-bookings`);
    } else {
      res.status(400).json({ error: 'Payment verification failed' });
    }
  } catch (error) {
    console.error('Payment success handling error:', error);
    res.status(500).json({ error: 'Payment processing failed' });
  }
});

// Stripe webhook
router.post('/webhook', express.raw({type: 'application/json'}), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.log(`Webhook signature verification failed.`, err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const bookingId = session.metadata.bookingId;
    
    // Update booking status
    await Booking.findOneAndUpdate(
      { bookingId },
      { status: 'confirmed' }
    );
  }

  res.json({received: true});
});

module.exports = router;
