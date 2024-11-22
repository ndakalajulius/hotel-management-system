const express = require('express');
const Room = require('../models/Room');

const router = express.Router();

// Get All Rooms
router.get('/', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching rooms', error: err });
  }
});

// Add a Room
router.post('/', async (req, res) => {
  const { name, type, price, status } = req.body;

  try {
    const newRoom = new Room({ name, type, price, status });
    await newRoom.save();
    res.status(201).json(newRoom);
  } catch (err) {
    res.status(500).json({ message: 'Error adding room', error: err });
  }
});

module.exports = router;
