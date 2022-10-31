const mongoose = require('mongoose');

const ParkingStateSchema = new mongoose.Schema({
  camera_id: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  frame_id: {
    type: String,
    required: true,
    index: true
  },
  open_spots: [
    {
      x: Number,
      y: Number,
      feet: Number
    }
  ]
}, {strict: true});

const ParkingState = new mongoose.model('ParkingState', ParkingStateSchema);

module.exports = ParkingState;
