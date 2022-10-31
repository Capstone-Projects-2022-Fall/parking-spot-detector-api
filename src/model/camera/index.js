const mongoose = require('mongoose');
const { Decimal128, String, Number } = mongoose.Schema.Types;

const CameraSchema = new mongoose.Schema({
  registration_id: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  coordinates: [Decimal128],
  meters_per_pixel: {
    type: Decimal128
  }
}, {strict: true});

const Camera = new mongoose.model('Camera', CameraSchema);

module.exports = Camera;
