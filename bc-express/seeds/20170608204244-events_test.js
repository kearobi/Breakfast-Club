'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Bevents', [
      {
        id: 1,
        place_1_id: 1,
        place_2_id: 2,
        date: '2017-06-30 08:00:00-07',
        vote_status: false,
        winner: 1,
        createdAt: '2017-06-02 08:00:00-07',
        updatedAt: '2017-06-02 08:00:00-07',
        active: false,
        speaker: "Rob Kaufman"
      },
      {
        id: 2,
        place_1_id: 2,
        place_2_id: 3,
        date: '2017-07-07 08:00:00-07',
        vote_status: false,
        winner: 1,
        createdAt: '2017-06-02 08:00:00-07',
        updatedAt: '2017-06-02 08:00:00-07',
        active: false,
        speaker: "Matt Clark"
      },
      {
        id: 3,
        place_1_id: 3,
        place_2_id: 4,
        date: '2017-07-14 08:00:00-07',
        vote_status: false,
        winner: 1,
        createdAt: '2017-06-02 08:00:00-07',
        updatedAt: '2017-06-02 08:00:00-07',
        active: false,
        speaker: "James Hall"
      },
      {
        id: 4,
        place_1_id: 1,
        place_2_id: 4,
        date: '2017-07-21 08:00:00-07',
        vote_status: false,
        winner: 2,
        createdAt: '2017-06-02 08:00:00-07',
        updatedAt: '2017-06-02 08:00:00-07',
        active: false,
        speaker: "Eric Norcross"
      },
      {
        id: 5,
        place_1_id: 4,
        place_2_id: 1,
        date: '2017-07-28 08:00:00-07',
        vote_status: false,
        winner: 2,
        createdAt: '2017-06-02 08:00:00-07',
        updatedAt: '2017-06-02 08:00:00-07',
        active: false,
        speaker: "Matt Clark"
      },
    ])
    .then(function(){
      return queryInterface.sequelize.query('ALTER SEQUENCE "Bevents_id_seq" RESTART 5')
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Bevents', [
      {
        id: 1,
        place_1_id: 1,
        place_2_id: 2,
        date: '2017-06-30 08:00:00-07',
        vote_status: false,
        winner: 1,
        createdAt: '2017-06-02 08:00:00-07',
        updatedAt: '2017-06-02 08:00:00-07',
        active: false,
        speaker: "Rob Kaufman"
      },
      {
        id: 2,
        place_1_id: 2,
        place_2_id: 3,
        date: '2017-07-07 08:00:00-07',
        vote_status: false,
        winner: 1,
        createdAt: '2017-06-02 08:00:00-07',
        updatedAt: '2017-06-02 08:00:00-07',
        active: false,
        speaker: "Matt Clark"
      },
      {
        id: 3,
        place_1_id: 3,
        place_2_id: 4,
        date: '2017-07-14 08:00:00-07',
        vote_status: false,
        winner: 1,
        createdAt: '2017-06-02 08:00:00-07',
        updatedAt: '2017-06-02 08:00:00-07',
        active: false,
        speaker: "James Hall"
      },
      {
        id: 4,
        place_1_id: 1,
        place_2_id: 4,
        date: '2017-07-21 08:00:00-07',
        vote_status: false,
        winner: 2,
        createdAt: '2017-06-02 08:00:00-07',
        updatedAt: '2017-06-02 08:00:00-07',
        active: false,
        speaker: "Eric Norcross"
      },
      {
        id: 5,
        place_1_id: 4,
        place_2_id: 1,
        date: '2017-07-28 08:00:00-07',
        vote_status: false,
        winner: 2,
        createdAt: '2017-06-02 08:00:00-07',
        updatedAt: '2017-06-02 08:00:00-07',
        active: false,
        speaker: "Matt Clark"
      }
    ])
    .then(function(){
      return queryInterface.sequelize.query('ALTER SEQUENCE "Bevents_id_seq" RESTART 1')
    })
  }
};
