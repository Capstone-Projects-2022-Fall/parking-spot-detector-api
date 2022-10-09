const mongoose = require('mongoose');

const URI = "mongodb://127.0.0.1:27017/parkingspotdetector"; //process.env.DATABASE_URL;

async function connect_to_db() {
  return mongoose.connect(URI);
}

module.exports = connect_to_db;
