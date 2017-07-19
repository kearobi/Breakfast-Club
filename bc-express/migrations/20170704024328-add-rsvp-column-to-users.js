'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Users', 'rsvp', Sequelize.BOOLEAN);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Users', 'rsvp');
  }
};
