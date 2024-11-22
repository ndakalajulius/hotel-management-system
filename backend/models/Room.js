const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: String, default: 'Available' },
}, { timestamps: true });

module.exports = mongoose.model('Room', roomSchema);
