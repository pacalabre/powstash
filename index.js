var express= require('express'),
app = express();
var bodyParser = require('body-parser');
var request = require('request');
var mongoose = require('mongoose');
var session = require('express-session');
var User = require('./models/users');
var Report = require('./models/weatherReports');

app.use(express.static(__dirname + '/static'));

app.use(session({
  secret: 'shredding gnar',
  resave: false,
  saveUninitialized: true
}));

app.set('view engine', 'ejs');

app.use( bodyParser.urlencoded({extended: false }) );

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/powStash');

quotes = [
"If you French Fry when you supposed to Pizza, you're gonna have a bad time -South Park",
'Just ski down there and jump off something for crying out loud! - Shane McConkey',
'We’re skiers from day 1. We’ll be skiers till the day we die - Tanner Hall'
]

app.get('/', function(req, res) {

  // use sendFile to render the index page
  res.render('index.ejs');
});

app.get('/signup', function(req, res) {
  // use sendFile to render the index page
  res.render('signup.ejs');
});

app.post("/signup", function(req, res) {
 User.create(req.body, function(err,user) {
  if(err) {
    return res.status(500).send(err);
  }
  if(user) {
    console.log("user created");
    user.save();
    res.redirect("/");
  }
 })
});

app.get("/login", function(req, res) {
  res.render('login.ejs');
})

//Find correct mongo syntax
app.post("/login", function(req, res) {
  var user = req.body.username;
  var pass = req.body.password;
  User.findOne({username:user}, function(err, user) {
    //console.log(JSON.stringify(user));
    if(err) {
      res.send(err);
    }
    if(user) {
      user.comparePassword(pass,function(err,match){
        //console.log(match);

        if(!err && match) {
          req.session.user = user;
          res.redirect("/myresorts");
        }
        else {
          res.redirect("/login");
        }
      })
    }
  })
})

app.get('/weather', function(req, res) {
  var query = req.query.q;
  //Open Weather API
  var urlWeather = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var parametersWeather = '&units=imperial&';
  var keyWeather = "APPID=" + process.env.OPEN_WEATHER_KEY;

  // request(urlWeather+query+parametersWeather+keyWeather, function(err, response, body) {
  //   var data = JSON.parse(body);
  //   // console.log(data);
  //   if(!err && response.statusCode === 200 && data) {
  //     res.render('weather',{conditions:data,q:query})
  //   } else {
  //     res.render('error');
  //   }
  // })

  //World Weather Api
  var urlWorld = 'http://api.worldweatheronline.com/premium/v1/ski.ashx?';
  var keyWorld ="key="+process.env.WORLD_WEATHER_KEY;
  var queryWorld = '&q='+query;
  var endWorld = '&includeLocation=yes&format=json';
  request(urlWorld+keyWorld+queryWorld+endWorld, function(err,response,body) {
    var data=JSON.parse(body);
    // console.log(urlWorld+keyWorld+queryWorld+endWorld);
    // console.log(data);
    if(!err && response.statusCode === 200 && data){
      res.render('weather',{conditions:data,q:query})
    } else {
      console.log(err);
      res.render("error");
    }
  })
})

app.post('/weather', function(req, res) {
  Report.create(req.body, function(err, report) {
    User.update({_id: req.session.user._id}, {$push: {savedResorts: report._id}}, function(err, user) {
      res.status(200).send('Added Resort');
    });
  });
});


app.get('/myresorts', function(req, res) {
  if(req.session.user) {
    User.findOne({username:req.session.user.username}, 'savedResorts', function(err,user){
      Report.find({'_id':{$in: user.savedResorts}}, function(err, mtnresorts){
        res.render("myresorts",{resorts:mtnresorts});
      });
    });
  }
});



app.listen(process.env.PORT || 3000);


// MONGODB_URI=mongodb://pacalabre:powstash@ds021761.mlab.com:21761/powstash

