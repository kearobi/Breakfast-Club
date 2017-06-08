'use strict';
module.exports = function(sequelize, DataTypes) {
  var Bevent = sequelize.define('Bevent', {
    date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        Bevent.belongsTo(models.Place, {
          foreignKey: 'placeId',
          as: 'Loc'
        })
      }
    }
  });
  return Bevent;
};
