'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.addColumn(
        'Users',
        'active',
        {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
        }
      ),
      queryInterface.addColumn(
        'Bevents',
        'active',
        {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
        }
      ),
      queryInterface.addColumn(
        'Places',
        'active',
        {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
        }
      )
    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('users', 'email'),
      queryInterface.removeColumn('users', 'encryptedPassword')
    ];
  }
};
