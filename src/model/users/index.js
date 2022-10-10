const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    //index: true
  },
  last_name: {
    type: String,
    required: true,
    //index: true
  },
  email: {
    type: String, 
    required: true, 
    index: true, 
    unique: true
  },
  phone_number: {
    type: String,
    unique: true,
    //index: true
  },
  password_hash: {
    type: String,
    required: true
  },
  handicap: {
    type: Boolean,
    //index: true,
  },
  address: {
    type: String,
    //index: true
  }
}, {
  strict: true
});

const User = new mongoose.model('User', UserSchema);

module.exports = User;
