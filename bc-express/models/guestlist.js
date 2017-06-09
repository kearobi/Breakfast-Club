'use strict';
module.exports = function(sequelize, DataTypes) {
  var GuestList = sequelize.define('GuestList', {
    user_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    vote: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        GuestList.belongsTo(models.Bevent, {
          foreignKey: 'event_id'
        })
        GuestList.belongsTo(models.User, {
          foreignKey: 'user_id'
        })
      }
    }
  });
  return GuestList;
};
