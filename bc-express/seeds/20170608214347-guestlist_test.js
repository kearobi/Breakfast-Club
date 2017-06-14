'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('GuestLists', [
    {
      id: 1,
      user_id: 1,
      event_id: 1,
      vote: '0',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 2,
      user_id: 2,
      event_id: 1,
      vote: '0',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 3,
      user_id: 3,
      event_id: 2,
      vote: '0',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 4,
      user_id: 4,
      event_id: 2,
      vote: '0',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    }
    ])
    .then(function(){
      return queryInterface.sequelize.query('ALTER SEQUENCE "GuestLists_id_seq" RESTART 10')
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('GuestLists', [
    {
      id: 1,
      user_id: 1,
      event_id: 1,
      vote: '0',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 2,
      user_id: 2,
      event_id: 1,
      vote: '0',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 3,
      user_id: 3,
      event_id: 2,
      vote: '0',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 4,
      user_id: 4,
      event_id: 2,
      vote: '0',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    }
    ])
    .then(function(){
      return queryInterface.sequelize.query('ALTER SEQUENCE "GuestLists_id_seq" RESTART 1')
    })
  }
};
