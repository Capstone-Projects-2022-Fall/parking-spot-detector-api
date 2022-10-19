const mongoose = require('mongoose');

const FrameSchema = new mongoose.Schema({
  camera_id: {type: String, required: true, index: true},
}, {strict: true});

const Frame = new mongoose.model('Frame', FrameSchema);

module.exports = Frame;
