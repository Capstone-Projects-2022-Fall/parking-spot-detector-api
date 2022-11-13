const mongoose = require('mongoose');
const passport_local_mongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {type: String, required: true, index: true, unique: true},
  phone_number: String,
  password_hash: String,
  handicap: String,
  address: String
}, {strict: true});

UserSchema.plugin(passport_local_mongoose);

const User = new mongoose.model('User', UserSchema);

module.exports = User;
