'use strict';
module.exports = function(sequelize, DataTypes) {
  var Place = sequelize.define('Place', {
    name: DataTypes.STRING,
    address_street: DataTypes.STRING,
    address_city: DataTypes.STRING,
    address_state: DataTypes.STRING,
    address_zip: DataTypes.STRING,
    phone: DataTypes.STRING,
    yelp_rating: DataTypes.INTEGER,
    image_url: DataTypes.STRING,
    categories: DataTypes.STRING,
    review_count: DataTypes.INTEGER,
    price: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Place;
};
