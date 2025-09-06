
// models/ChatSession.js
import mongoose from 'mongoose';
const chatSessionSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: String, // Clerk user ID
    required: true
  },
  currentStep: {
    type: String,
    enum: ['museum_selection', 'package_selection', 'date_selection', 'ticket_count', 'user_details', 'payment', 'completed'],
    default: 'museum_selection'
  },
  bookingData: {
    museumId: mongoose.Schema.Types.ObjectId,
    packageId: mongoose.Schema.Types.ObjectId,
    visitDate: Date,
    numberOfTickets: Number,
    userName: String,
    userEmail: String,
    totalPrice: Number
  },
  messages: [{
    role: { type: String, enum: ['user', 'bot'] },
    message: String,
    timestamp: { type: Date, default: Date.now }
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  expiresAt: {
    type: Date,
    default: Date.now,
    expires: 1800 // 30 minutes
  }
});

module.exports = mongoose.model('ChatSession', chatSessionSchema);