var express= require('express'),
app = express();
var bodyParser = require('body-parser')
var request = require('request');
var mongoose = require('mongoose');

var User = require('./models/users');

app.use(express.static(__dirname + '/views'));

app.set('view engine', 'ejs');

app.use( bodyParser.urlencoded({extended: false }) );


mongoose.connect('mongodb://localhost/powStash');

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

app.get('/weather', function(req, res) {
var query = req.query.q;
var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
var key = '&APPID=8057a36377e08e0ab0adb6578fabe5f2';
console.log(query);

  // res.render('weather');

  request(url+query+key, function(err, response, body) {
    var data = JSON.parse(body);
    console.log(data);
    if(!err && response.statusCode === 200 && data) {
      res.render('weather',{conditions:data,q:query})
    } else {
      res.render('error');
    }
  })
})

app.get('/myresorts', function(req, res){
  // use sendFile to render the index page
  res.render('myresorts.ejs');
});


app.listen(3000, function(){
});


//JSON.stringify(variable)
// [object:]
