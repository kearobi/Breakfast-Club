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
        winner: 1,
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      },
      {
        id: 2,
        place_1_id: 3,
        place_2_id: 4,
        date: '2017-07-02 07:52:29-07',
        vote_status: false,
        winner: null,
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Bevents', [
      {
        id: 1,
        place_1_id: 1,
        place_2_id: 2,
        date: '2017-06-02 07:52:29-07',
        vote_status: false,
        winner: 1,
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      },
      {
        id: 2,
        place_1_id: 3,
        place_2_id: 4,
        date: '2017-07-02 07:52:29-07',
        vote_status: false,
        winner: null,
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      }
    ])}
};
