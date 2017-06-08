'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Bevents', [
      {
        id: 1,
        place_1_id: 1,
        place_2_id: 2,
        date: '2017-06-02 07:52:29-07',
        vote_status: false,
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      },
      {
        id: 2,
        place_1_id: 3,
        place_2_id: 4,
        date: '2017-06-02 07:52:29-07',
        vote_status: false,
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
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
  }
};
