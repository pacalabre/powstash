var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({

  username: { type: String, required: true, unique: true },
  password: { type: String,required: true, },
  savedResorts: [{type: mongoose.Schema.ObjectId, ref:"Reports"}]
});


//hooks
userSchema.pre('save', function(next) {
  var user = this;
    if(!user.isModified('password')){
      return next();
    }
    bcrypt.genSalt(10, function(err, salt){
      if(err){
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err,hash){
        if(err){
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  });

userSchema.methods.comparePassword = function(password,callback) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if(err) {
      return callback(err);
    }
    callback(null, isMatch);
  })
}

var User = mongoose.model('User', userSchema);
// make this available to our other files
module.exports = User;
