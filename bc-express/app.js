var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:3000'
}
// YELLLPPPP
const RapidAPI = require('rapidapi-connect');
const rapid = new RapidAPI("default-application_5931dd81e4b0eaefb644d037", "a8ccee1a-27f1-496e-a16b-176dbfbeba8f");

rapid.call('YelpAPI', 'getBusinesses', {
	'accessToken': 'evT8bFcIz5xSR9PR7EijsQdLZ5RYznENKULx3EZ3Impj0HQsee0aVTj6aJcIgIvkGIP6FYPye9qwB4TKh_yoFZ416bJcLAiRfhgWTDZHBfmDufLRt65Q5yAZqecxWXYx',
	'term': 'breakfast',
	'location': '92104',
	'coordinate': '',
	'radius': '2000',
	'categories': '',
	'locale': '',
	'limit': '',
	'offset': '',
	'sortBy': '',
	'price': '',
	'openNow': '',
	'openAt': '',
	'attributes': ''

}).on('success', (payload)=>{
	 /*YOUR CODE GOES HERE*/
  //  return getBusiness
}).on('error', (payload)=>{
	 /*YOUR CODE GOES HERE*/
});
// END OF YELLLLLPPPPP

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())



app.get('/', function (request, response) {
  response.json({YelpAPI})
});


app.listen(4000, function () {
 console.log('listening on port 4000!');
});
