const express = require('express');
const Booking = require('../models/Booking');

const router = express.Router();

// Add a Booking
router.post('/', async (req, res) => {
  const { userId, roomId, startDate, endDate, totalAmount } = req.body;

  try {
    const newBooking = new Booking({ userId, roomId, startDate, endDate, totalAmount });
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ message: 'Error booking room', error: err });
  }
});

module.exports = router;
