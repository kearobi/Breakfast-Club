'use strict';
module.exports = function(sequelize, DataTypes) {
  var Place = sequelize.define('Place', {
    // would have to run a migration to add this bottom
    // Recommend adding an `id` & `yelp_id` attribute
    // in the process simplifying the db setup
    // ----------------------------------------
    // id: DataTypes.INTEGER,
    // yelp_id: DataTypes.INTEGER,
    // ----------------------------------------
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
    price: DataTypes.STRING,
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    // instanceMethods: {
    //   toJSON(){
    //     return {
    //       name: this.get(this.props.place),
    //       address_street: this.get(this.props.place),
    //       address_city: this.get(this.props.place),
    //       address_state: this.get(this.props.place),
    //       address_zip: this.get(this.props.place),
    //       phone: this.get(this.props.place),
    //       yelp_rating: this.get(this.props.place),
    //       image_url: this.get(this.props.place),
    //       categories: this.get(this.props.place),
    //       review_count: this.get(this.props.place),
    //       price: this.get(this.props.place)
    //     }
    //   }
    // },
    classMethods: {
      associate: function(models) {
        Place.hasMany(models.Bevent, {
          foreignKey: 'place_1_id',
          as: 'events_1',
        })
        Place.hasMany(models.Bevent, {
          foreignKey: 'place_2_id',
          as: 'events_2'
        })
      }
    }
  });
  return Place;
};
