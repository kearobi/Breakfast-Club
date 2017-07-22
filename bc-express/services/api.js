'use strict';

const DEFAULT_LOCATION        = '92104';
const DEAFULT_RADIUS          = '2000'; // Meters or feet?
const DEFAULT_TERM            = 'breakfast';

const RAPID_API_ACCESS_TOKEN  = 'evT8bFcIz5xSR9PR7EijsQdLZ5RYznENKULx3EZ3Impj0HQsee0aVTj6aJcIgIvkGIP6FYPye9qwB4TKh_yoFZ416bJcLAiRfhgWTDZHBfmDufLRt65Q5yAZqecxWXYx';
const RAPID_API_PROJECT_NAME  = 'default-application_5931dd81e4b0eaefb644d037';
const RAPID_API_KEY           = 'a8ccee1a-27f1-496e-a16b-176dbfbeba8f';
const RAPID_API_NAME          = 'YelpAPI';
const RAPID_API_METHODS       = {
                                  GET_BUSINESS: 'getBusinesses'
                                };


var Place                     = require('../models').Place;
var RapidAPI                  = require('rapidapi-connect');

// Private Methods
function buildPlace(responseData) {
  let place             = Place.build();

  place.yelpId          = responseData.id;
  place.name            = responseData.name;
  place.image_url       = responseData.image_url;
  place.review_count    = responseData.review_count;
  place.yelp_rating     = responseData.rating;
  place.price           = responseData.price;
  place.address_street  = responseData.location.address1;
  place.address_city    = responseData.location.city;
  place.address_zip     = responseData.location.zip_code;
  place.address_state   = responseData.location.state;
  place.phone           = responseData.display_phone;
  place.categories      = responseData.categories[0].title;
  
  // Before save, check to see if the place already exists
  // place.save()

  return place;
}

// Class
class API {
  constructor() {

  }

  static seed() {
    console.log("SEEDING Places DB...");

    var rapidAPI = new RapidAPI(RAPID_API_PROJECT_NAME, RAPID_API_KEY);

    // Returning 
    return rapidAPI.call(RAPID_API_NAME, RAPID_API_METHODS.GET_BUSINESS, {
      'accessToken':  RAPID_API_ACCESS_TOKEN,
      'term':         DEFAULT_TERM,
      'location':     DEFAULT_LOCATION,
      'coordinate':   '',
      'radius':       DEAFULT_RADIUS,
      'categories':   '',
      'locale':       '',
      'limit':        '',
      'offset':       '',
      'sortBy':       '',
      'price':        '',
      'openNow':      '',
      'openAt':       '',
      'attributes':   ''

    }).on('success', (payload) => {
      console.log("SUCCESS");

      let businesses = [];

      for (let i = 0, bizLength = payload.businesses.length; i < bizLength; i++) {
        businesses.push( buildPlace(payload.businesses[i]) );
      }

      console.log("Businesses: ", businesses);

      return businesses;
    }).on('error',   (payload) => {
      console.log("ERROR: ", payload);
    });
  } 
}

module.exports = API;
