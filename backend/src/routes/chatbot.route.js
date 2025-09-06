// routes/chatbot.js
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const ChatSession = require('../models/ChatSession');
const Museum = require('../models/Museum');
const Booking = require('../models/Booking');
const { requireAuth } = require('@clerk/express');
const router = express.Router();

// Start or continue chat session
router.post('/chatbot', requireAuth(), async (req, res) => {
  try {
    const { message, sessionId } = req.body;
    const userId = req.auth.userId;

    let session;
    
    if (sessionId) {
      session = await ChatSession.findOne({ sessionId, userId, isActive: true });
    }

    if (!session) {
      // Create new session
      session = new ChatSession({
        sessionId: uuidv4(),
        userId,
        currentStep: 'museum_selection'
      });
    }

    // Add user message
    session.messages.push({
      role: 'user',
      message: message
    });

    const botResponse = await processMessage(session, message);
    
    // Add bot response
    session.messages.push({
      role: 'bot',
      message: botResponse.message
    });

    await session.save();

    res.json({
      sessionId: session.sessionId,
      message: botResponse.message,
      currentStep: session.currentStep,
      options: botResponse.options,
      paymentUrl: botResponse.paymentUrl
    });

  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Chat processing failed' });
  }
});

async function processMessage(session, message) {
  switch (session.currentStep) {
    case 'museum_selection':
      return await handleMuseumSelection(session, message);
    case 'package_selection':
      return await handlePackageSelection(session, message);
    case 'date_selection':
      return await handleDateSelection(session, message);
    case 'ticket_count':
      return await handleTicketCount(session, message);
    case 'user_details':
      return await handleUserDetails(session, message);
    default:
      return { message: "I'm sorry, I didn't understand. Let's start over with selecting a museum." };
  }
}

async function handleMuseumSelection(session, message) {
  const museums = await Museum.find({ isActive: true });
  
  if (message.toLowerCase().includes('start') || message.toLowerCase().includes('book')) {
    return {
      message: "Welcome! I'll help you book museum tickets. Please select a museum:",
      options: museums.map(museum => ({
        id: museum._id.toString(),
        name: museum.name,
        description: museum.description
      }))
    };
  }

  // Check if message contains museum selection
  const selectedMuseum = museums.find(museum => 
    message.toLowerCase().includes(museum.name.toLowerCase()) ||
    message === museum._id.toString()
  );

  if (selectedMuseum) {
    session.bookingData.museumId = selectedMuseum._id;
    session.currentStep = 'package_selection';
    
    return {
      message: `Great! You selected ${selectedMuseum.name}. Now please choose a package:`,
      options: selectedMuseum.packages.filter(pkg => pkg.isActive).map(pkg => ({
        id: pkg._id.toString(),
        name: pkg.name,
        description: pkg.description,
        price: pkg.price,
        duration: pkg.duration
      }))
    };
  }

  return {
    message: "Please select one of the available museums:",
    options: museums.map(museum => ({
      id: museum._id.toString(),
      name: museum.name,
      description: museum.description
    }))
  };
}

async function handlePackageSelection(session, message) {
  const museum = await Museum.findById(session.bookingData.museumId);
  const selectedPackage = museum.packages.find(pkg => 
    message.toLowerCase().includes(pkg.name.toLowerCase()) ||
    message === pkg._id.toString()
  );

  if (selectedPackage) {
    session.bookingData.packageId = selectedPackage._id;
    session.currentStep = 'date_selection';
    
    return {
      message: `Perfect! You selected the ${selectedPackage.name} package (₹${selectedPackage.price}). When would you like to visit? Please provide a date (YYYY-MM-DD format):`
    };
  }

  return {
    message: "Please select one of the available packages:",
    options: museum.packages.filter(pkg => pkg.isActive).map(pkg => ({
      id: pkg._id.toString(),
      name: pkg.name,
      description: pkg.description,
      price: pkg.price
    }))
  };
}

async function handleDateSelection(session, message) {
  const dateRegex = /(\d{4}-\d{2}-\d{2})/;
  const dateMatch = message.match(dateRegex);
  
  if (dateMatch) {
    const selectedDate = new Date(dateMatch[1]);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate >= today) {
      session.bookingData.visitDate = selectedDate;
      session.currentStep = 'ticket_count';
      
      return {
        message: `Date confirmed: ${selectedDate.toDateString()}. How many tickets do you need?`
      };
    } else {
      return {
        message: "Please select a future date (YYYY-MM-DD format):"
      };
    }
  }

  return {
    message: "Please provide a valid date in YYYY-MM-DD format (e.g., 2024-03-15):"
  };
}

async function handleTicketCount(session, message) {
  const ticketCount = parseInt(message);
  
  if (ticketCount && ticketCount > 0 && ticketCount <= 20) {
    session.bookingData.numberOfTickets = ticketCount;
    session.currentStep = 'user_details';
    
    const museum = await Museum.findById(session.bookingData.museumId);
    const selectedPackage = museum.packages.id(session.bookingData.packageId);
    const totalPrice = selectedPackage.price * ticketCount;
    session.bookingData.totalPrice = totalPrice;
    
    return {
      message: `${ticketCount} tickets confirmed! Total cost: ₹${totalPrice}. Please provide your full name for the booking:`
    };
  }

  return {
    message: "Please enter a valid number of tickets (1-20):"
  };
}

async function handleUserDetails(session, message) {
  if (message.trim().length >= 2) {
    session.bookingData.userName = message.trim();
    session.currentStep = 'payment';
    
    // Create booking and payment intent
    const booking = await createBooking(session);
    const paymentUrl = await createPaymentIntent(booking);
    
    return {
      message: `Thank you, ${message}! Your booking details are confirmed. Please proceed to payment:`,
      paymentUrl: paymentUrl
    };
  }

  return {
    message: "Please provide your full name:"
  };
}

async function createBooking(session) {
  const booking = new Booking({
    bookingId: uuidv4(),
    userId: session.userId,
    museumId: session.bookingData.museumId,
    packageId: session.bookingData.packageId,
    userName: session.bookingData.userName,
    userEmail: session.bookingData.userEmail || 'user@example.com', // Get from Clerk
    visitDate: session.bookingData.visitDate,
    numberOfTickets: session.bookingData.numberOfTickets,
    totalPrice: session.bookingData.totalPrice,
    chatSession: {
      sessionId: session.sessionId,
      messages: session.messages
    }
  });

  await booking.save();
  return booking;
}

async function createPaymentIntent(booking) {
  // This will be implemented in the payment route
  return `/api/payments/create-session/${booking.bookingId}`;
}

module.exports = router;