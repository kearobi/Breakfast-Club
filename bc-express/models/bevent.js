'use strict';
module.exports = function(sequelize, DataTypes) {
  var Bevent = sequelize.define('Bevent', {
    date: DataTypes.DATE,
    // place_1_id: DataTypes.INTEGER,
    // place_2_id: DataTypes.INTEGER,
    //this way, we wouldnt be using a foreign key. Essentially don't even need a places database. That way, just hitting the API every time we need to pull in places and using the yelp id. Might need to set up another API call. Because we wouldn't be storing the info in the Places database, we would need to hit the API again and get the information that specific place, so two API calls.
    // This is an example of how we might use the unique Yelp ID of each
    // business and pull that businesses info on each request as opposed
    // to saving each places info to the DB.
    // This would be an alternative to the above lines.
    // ----------------------------------------
    // place_1_yelp_id: DataTypes.INTEGER,
    // place_2_yelp_id: DataTypes.INTEGER,
    // ----------------------------------------
    vote_status: DataTypes.BOOLEAN,
    winner: DataTypes.INTEGER,
    place: DataTypes.VIRTUAL,
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    speaker: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        Bevent.belongsTo(models.Place, {
          foreignKey: 'place_1_id'
        })
        Bevent.belongsTo(models.Place, {
          foreignKey: 'place_2_id'
        })
        Bevent.hasMany(models.GuestList, {
          foreignKey: 'event_id',
          as: 'guestLists'
        })
      }
    }
  });
  return Bevent;
};
