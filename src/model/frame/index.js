const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const FrameSchema = new Schema({
  camera_id: {
    type: String, 
    // ??? change type to reference camera ID
    required: true, 
    index: true, 
    unique: true
  },
  bytes: {
    type: Number,
    required: true,
    //index: true
  },
  datetime: {
    type: String,
    required: true,
    //index: true
  },
  processed: {
    type: Boolean,
    //index: true
  }
}, {
  strict: true
});

const Frame = new model('Frame', FrameSchema);

module.exports = Frame;
