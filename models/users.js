var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String,required: true, }
});

var User = mongoose.model('User', userSchema);
userSchema.pre('save', function(next) {
  var user = this;
    if(user.password) {
        bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function(err,hash){
          user.password = hash;
          next();
        })
      });
    } else {
      callback(null, user);
    }
    return user;
  // }
});
// make this available to our other files
module.exports = User;
