const mongoose = require('mongoose');
//const passport_local_mongoose = require('passport-local-mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
    index: true,
  },
  password_hash: String,
  phone_number: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  handicap: {
    type: Boolean,
    required: true
  },
  register_camera: {
    type: Boolean,
    required: true
  }
}, {
  strict: true
});

//UserSchema.plugin(passport_local_mongoose);

const User = new mongoose.model('User', UserSchema);

module.exports = User;
