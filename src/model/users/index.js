const UserSchema = new mongoose.Schema({
  name: String
});

const User = new mongoose.model('User', UserSchema);

module.exports = User;
