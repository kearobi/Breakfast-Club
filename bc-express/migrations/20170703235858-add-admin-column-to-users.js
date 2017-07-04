'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Users', 'admin', Sequelize.BOOLEAN);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Users', 'admin');
  }
};
