'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [queryInterface.addColumn(
      'Users',
      'encryptedPassword',
      Sequelize.STRING
    ),
    queryInterface.addColumn(
      'Users',
      'authToken',
        Sequelize.STRING
    ),
    queryInterface.addColumn(
      'Users',
      'authTokenExpiration',
      Sequelize.STRING
    ),
    queryInterface.addColumn(
      'Users',
      'salt',
      Sequelize.STRING
    )
  ]
},

down: function (queryInterface, Sequelize) {
  return [queryInterface.removeColumn(
    'Users',
    'encryptedPassword'
  ),
  queryInterface.removeColumn(
    'Users',
    'authToken'
  ),
  queryInterface.removeColumn(
    'Users',
    'authTokenExpiration'
  ),
  queryInterface.removeColumn(
    'Users',
    'salt'
  )]
}
}
