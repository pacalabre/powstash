var mongoose = require('mongoose');

var reportSchema = new mongoose.Schema({
  name: { type: String },
  latitude: { type: String},
  longitude:{ type: String},
  _userResorts :[{type:Schema.ObjectId, ref:'User'}]
});

var Report = mongoose.model('Report', reportSchema);



// make this available to our other files
module.exports = Report;

