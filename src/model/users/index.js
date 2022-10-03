const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // first_name: String,
  // last_name: String,
  email: {type: String, required: true, index: true, unique: true},
  // phone_number: String,
  // password_hash: String,
  // handicap: String,
  // address: String
}, {strict: true});

const User = new mongoose.model('User', UserSchema);

module.exports = User;
