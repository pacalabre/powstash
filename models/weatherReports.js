var mongoose = require('mongoose');

var reportSchema = new mongoose.Schema({
  name: { type: String },
  latitude: {type: String},
  longitude:{type: String}

  // currentTemp: { type: String },
  // tempHigh: { type: Number },
  // tempLow: { type: Number },
  // icon: { type: String },
  // weatherDesc:{ type: String},
  // totalSnow: { type: String}
});

var Report = mongoose.model('Report', userSchema);



// make this available to our other files
module.exports = Report;










// Original resort schema

// id: integer
// resorts: [
//   {
//     name: String,
//     currentTemp: integer,
//     tempHigh: integer,
//     tempLow: integer,
//     icon: url,
//     weatherDesc: String",
//     totalSnow: float
//   }
// ]
