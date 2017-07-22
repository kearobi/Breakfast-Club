'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.addColumn(
        'Places',
        'url',
        {
          type: Sequelize.STRING,
          allowNull: true
        }
      ),
    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('Places', 'url'),
    ];
  }
};
