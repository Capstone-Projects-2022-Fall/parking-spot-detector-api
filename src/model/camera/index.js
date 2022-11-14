const mongoose = require('mongoose');
const { Decimal128, String, Number } = mongoose.Schema.Types;

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
  orientation: {
    type: [Number],
  },
  segments: {
    type: [[[Number]]]
  },
  spot_sizes: {
    type: [midpointDistSchema]
  },
  coordinates: [Decimal128]
}, {strict: true});

const Camera = new mongoose.model('Camera', CameraSchema);

module.exports = Camera;
