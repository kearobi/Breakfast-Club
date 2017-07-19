'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.addColumn(
        'Bevents',
        'speaker',
        {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: undefined
        }
      ),
    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('Bevents', 'speaker'),
    ];
  }
};
