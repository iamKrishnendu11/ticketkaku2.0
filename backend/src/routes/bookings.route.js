// routes/bookings.js
const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// Get user bookings
router.get('/', async (req, res) => {
  try {
    const userId = req.auth.userId;
    const bookings = await Booking.find({ userId }).populate('museumId').sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get specific booking with QR code
router.get('/:bookingId', async (req, res) => {
  try {
    const userId = req.auth.userId;
    const booking = await Booking.findOne({ 
      bookingId: req.params.bookingId, 
      userId 
    }).populate('museumId');
    
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Cancel booking
router.delete('/:bookingId', async (req, res) => {
  try {
    const userId = req.auth.userId;
    const booking = await Booking.findOne({ 
      bookingId: req.params.bookingId, 
      userId 
    });
    
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    
    if (booking.status === 'confirmed') {
      const visitDate = new Date(booking.visitDate);
      const now = new Date();
      const timeDiff = visitDate - now;
      const daysDiff = timeDiff / (1000 * 3600 * 24);
      
      if (daysDiff < 1) {
        return res.status(400).json({ error: 'Cannot cancel booking less than 24 hours before visit' });
      }
    }
    
    booking.status = 'cancelled';
    await booking.save();
    
    res.json({ message: 'Booking cancelled successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
