'use strict';
module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define('Message', {
    content: DataTypes.STRING,
    author: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Message.belongsTo(models.User, {
          foreignKey: 'user_id'
        })
      }
    }
  });
  return Message;
};
