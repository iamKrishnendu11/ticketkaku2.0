// models/Booking.js

import mongoose from 'mongoose';
const bookingSchema = new mongoose.Schema({
  bookingId: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: String, // Clerk user ID
    required: true
  },
  museumId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Museum',
    required: true
  },
  packageId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  visitDate: {
    type: Date,
    required: true
  },
  numberOfTickets: {
    type: Number,
    required: true,
    min: 1
  },
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },
  paymentIntentId: {
    type: String
  },
  qrCode: {
    type: String // Base64 encoded QR code
  },
  chatSession: {
    sessionId: String,
    messages: [{
      role: { type: String, enum: ['user', 'bot'] },
      message: String,
      timestamp: { type: Date, default: Date.now }
    }]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

bookingSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Booking', bookingSchema);
