//read a list of locations from yelp
//loop through those locations
//check if location is in our database
//if yes then update the location in our database from yelp
//if else create a new location
import place from './models.js'


sequelize model:create --name Place --attributes
name:string,
address_street:string,
address_city:string,
address_state:string,
address_zip:string,
phone:string,
yelp_rating:integer,
image_url:string,
categories:string,
review_count:integer,
price:string
