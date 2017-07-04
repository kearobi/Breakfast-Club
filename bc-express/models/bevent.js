'use strict';
module.exports = function(sequelize, DataTypes) {
  var Bevent = sequelize.define('Bevent', {
    date: DataTypes.DATE,
    place_1_id: DataTypes.INTEGER,
    place_2_id: DataTypes.INTEGER,
    vote_status: DataTypes.BOOLEAN,
    winner: DataTypes.INTEGER,
    place: DataTypes.VIRTUAL
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
