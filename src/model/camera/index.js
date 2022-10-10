const mongoose = require('mongoose');

const CameraSchema = new mongoose.Schema({
  registration_id: {
    type: String, 
    required: true, 
    index: true, 
    unique: true
  },
  coordinates: {
    type: [String],
    //index: true,
  }, 
  orientation: {
    type: [Number],
    //index: true,
  }
}, {strict: true});

const Camera = new mongoose.model('Camera', CameraSchema);

module.exports = Camera;
