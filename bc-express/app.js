var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var cors = require('cors')
var Place = require('./models').Place
// var payload = require('./api').payload
var User = require('./models').Users

const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', function (request, response) {
  response.json({message: 'API Example App'})
});

app.get('/places', function(request, response){
  Place.findAll().then(function(places){
    response.status(200)
    response.json({status: 'success', places: places})
  })
})

app.post('/places', function(request, response){
  let placeParams = request.body.place
  Place.create(placeParams).then(function(place){
    response.status(200)
    response.json({status: 'success', place: place})
  }).catch(function(error){
    response.status(400)
    response.json({status: 'error', error: error})
  })
})

app.post('/signup', function(request, response){
  console.log(request.body)
  let userParams = request.body.user
  User.create(userParams).then(function(user){
    response.status(200)
    response.json({status: 'success', user: user})
  }).catch(function(error){
    response.status(400)
    response.json({status: 'error', error: error})
  })
})

app.listen(4000, function () {
 console.log('listening on port 4000!');
});
