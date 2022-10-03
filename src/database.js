const mongoose = require('mongoose');

const uri = "mongodb://parkingspotdetectorapi:password@127.0.0.1:27017/parkingspotdetector"; //process.env.DATABASE_URL;

async function main() {
  await mongoose.connect(uri);

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled

  const UserSchema = new mongoose.Schema({
    name: String
  });

  const User = new mongoose.model('User', UserSchema);

  const new_user = new User({name: "yuriyakymiv"});

  await new_user.save();

  const users = await User.find();

  console.log(users);
}

main().catch(err => console.log(err));
