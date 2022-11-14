const mongoose = require('mongoose');

const midpointDistSchema = new mongoose.Schema({
    midpoint: [Number],
    size: mongoose.Decimal128
});

const CameraSchema = new mongoose.Schema({
  registration_id: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  coordinates: {
    type: [Number]
  },
  orientation: {
    type: [Number],
  },
  segments: {
    type: [[[Number]]]
  },
  spot_sizes: {
    type: [midpointDistSchema]
  }
}, {strict: true});

const Camera = new mongoose.model('Camera', CameraSchema);

module.exports = Camera;
