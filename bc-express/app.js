var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var cors = require('cors')
var Place = require('./models').Place
var payload = require('./api').payload
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
  rapid.call().then(function(places){
    response.status(200)
    response.json({status: 'success', places: places})
  })
})


app.listen(4000, function () {
 console.log('listening on port 4000!');
});
