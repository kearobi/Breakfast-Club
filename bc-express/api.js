//read a list of locations from yelp
//loop through those locations
//check if location is in our database
//if yes then update the location in our database from yelp
//if else create a new location
// import place from './models/place.js'
var Place = require('./models').Place

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

  var vals=[];
    for(var i=0;i<payload.businesses.length;i++){
      vals.push(payload.businesses[i]);
        }
        // console.log(vals);

//may want to extract this out into a separate method because we'll be using it twice
    var data = []
    for(var i=0;i<vals.length;i++){
      var newObj = Place.build()
			newObj.yelp_id = vals[i].id,
      newObj.name = vals[i].name,
      newObj.image_url = vals[i].image_url,
      newObj.review_count = vals[i].review_count,
      // newObj.title = vals[i].title,
      newObj.yelp_rating = vals[i].rating,
      newObj.price = vals[i].price,
      newObj.address_street = vals[i].location.address1,
      newObj.address_city = vals[i].location.city,
      newObj.address_zip = vals[i].location.zip_code,
      newObj.address_state = vals[i].location.state,
      newObj.phone = vals[i].display_phone,
      newObj.categories = vals[i].categories[0].title,
      newObj.save() //promsie
      //data.push(newObj)
    }
    console.log(data);

}).on('error', (payload)=>{
	 /*YOUR CODE GOES HERE*/
});
