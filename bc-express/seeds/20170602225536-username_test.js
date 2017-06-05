'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        firstName: "Test",
        lastName: "McTest",
        email: "test@testing.com",
        neighborhood: "North Park",
        password: "testing123",
        createdAt: "2017-06-02 14:52:29",
        updatedAt: "2017-06-02 14:52:29"
      },
      {
        id: 2,
        firstName: "Test2",
        lastName: "McTest2",
        email: "test2@testing.com",
        neighborhood: "South Park",
        password: "testing456",
        createdAt: "2017-06-02 14:52:29",
        updatedAt: "2017-06-02 14:52:29"
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', [
      {
        id: 1,
        firstName: "Test",
        lastName: "McTest",
        email: "test@testing.com",
        neighborhood: "North Park",
        password: "testing123",
        createdAt: "2017-06-02 14:52:29",
        updatedAt: "2017-06-02 14:52:29"
      },
      {
        id: 2,
        firstName: "Test2",
        lastName: "McTest2",
        email: "test2@testing.com",
        neighborhood: "South Park",
        password: "testing456",
        createdAt: "2017-06-02 14:52:29",
        updatedAt: "2017-06-02 14:52:29"
      }
    ])


  }
};
