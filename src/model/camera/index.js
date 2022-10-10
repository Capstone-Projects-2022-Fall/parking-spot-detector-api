const mongoose = require('mongoose');

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
  }
}, {strict: true});

const Camera = new mongoose.model('Camera', CameraSchema);

module.exports = Camera;
