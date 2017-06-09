'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Messages',
      'user_id',
      Sequelize.INTEGER
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Messages',
      'user_id'
    )
  }
};
