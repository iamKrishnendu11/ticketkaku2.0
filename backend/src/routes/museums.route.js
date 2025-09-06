// routes/museums.js
import express from 'express';
const Museum = require('../models/Museum');
const router = express.Router();

// Get all active museums
router.get('/museum', async (req, res) => {
  try {
    const museums = await Museum.find({ isActive: true });
    res.json(museums);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get museum by ID
router.get('/museum/:id', async (req, res) => {
  try {
    const museum = await Museum.findById(req.params.id);
    if (!museum || !museum.isActive) {
      return res.status(404).json({ error: 'Museum not found' });
    }
    res.json(museum);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get packages for a museum
router.get('/museum/:id/packages', async (req, res) => {
  try {
    const museum = await Museum.findById(req.params.id);
    if (!museum || !museum.isActive) {
      return res.status(404).json({ error: 'Museum not found' });
    }
    const activePackages = museum.packages.filter(pkg => pkg.isActive);
    res.json(activePackages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;