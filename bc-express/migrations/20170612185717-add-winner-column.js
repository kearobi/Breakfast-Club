'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Bevents',
      'winner',
      Sequelize.INTEGER
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Bevents',
      'winner'
    )
  }
};
