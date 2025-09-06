// utils/inngest.js
const { Inngest } = require('inngest');

const inngest = new Inngest({ 
  id: 'museum-ticketing-system',
  name: 'Museum Ticketing System'
});

// Email notification function
const sendBookingConfirmation = inngest.createFunction(
  { id: 'send-booking-confirmation' },
  { event: 'booking.confirmed' },
  async ({ event, step }) => {
    const { bookingId, userEmail, userName, museumName } = event.data;
    
    // Here you would integrate with your email service (SendGrid, AWS SES, etc.)
    console.log(`Sending confirmation email to ${userEmail} for booking ${bookingId}`);
    
    // Example email content
    const emailContent = {
      to: userEmail,
      subject: 'Booking Confirmation - Museum Tickets',
      html: `
        <h2>Booking Confirmed!</h2>
        <p>Dear ${userName},</p>
        <p>Your booking for ${museumName} has been confirmed.</p>
        <p>Booking ID: ${bookingId}</p>
        <p>Please visit /my-bookings to view your ticket and QR code.</p>
      `
    };
    
    return { success: true, emailSent: true };
  }
);

module.exports = { inngest, sendBookingConfirmation };