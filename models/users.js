var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
  password: {type: String, required: true}
});

var User = mongoose.model('User', userSchema);

// make this available to our other files
module.exports = User;
