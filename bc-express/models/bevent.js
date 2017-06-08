'use strict';
module.exports = function(sequelize, DataTypes) {
  var Bevent = sequelize.define('Bevent', {
    date: DataTypes.DATE,
    place_1_id: DataTypes.INTEGER,
    place_2_id: DataTypes.INTEGER,
    vote_status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Bevent.hasMany(models.Place, {
          foreignKey: 'place_1_id',
          as: 'place_1'
        })
        Bevent.hasMany(models.Place, {
          foreignKey: 'place_2_id',
          as: 'place_2'
        })
        Bevent.belongsTo(models.GuestList, {
          foreignKey: 'event_id'
        })
      }
    }
  });
  return Bevent;
};
