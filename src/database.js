const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/parkingspotdetector";

console.log(DATABASE_URL);
console.log(__dirname);

async function connect_to_db() {
  return mongoose.connect(DATABASE_URL);
}

module.exports = connect_to_db;
