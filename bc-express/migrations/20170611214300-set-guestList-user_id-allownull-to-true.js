'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'GuestLists',
      'user_id',
      {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'GuestLists',
      'user_id',
      {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    )
  }
};
