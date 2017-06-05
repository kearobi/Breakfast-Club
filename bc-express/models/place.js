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
    // instanceMethods: {
    //   toJSON(){
    //     return {
    //       name: this.get('color'),
    //       address_street: this.get('breed'),
    //       address_city: this.get('gender'),
    //       address_state: this.get('habitat'),
    //       address_zip: this.get('personality'),
    //       phone: this.get('age'),
    //       yelp_rating: this.get('imageUrl'),
    //       image_url: this.get('imageUrl'),
    //       categories: this.get('imageUrl'),
    //       review_count: this.get('imageUrl'),
    //       price: this.get('imageUrl')
    //
    //     }
    //   }
    // },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Place;
};
