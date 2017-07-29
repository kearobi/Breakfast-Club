'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('GuestLists', [
    {
      id: 1,
      user_id: 1,
      event_id: 1,
      vote: '1',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 2,
      user_id: 2,
      event_id: 1,
      vote: '1',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 3,
      user_id: 4,
      event_id: 1,
      vote: '1',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 4,
      user_id: 6,
      event_id: 1,
      vote: '2',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 5,
      user_id: 5,
      event_id: 1,
      vote: '1',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 6,
      user_id: 1,
      event_id: 2,
      vote: '0',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 7,
      user_id: 2,
      event_id: 2,
      vote: '2',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 8,
      user_id: 3,
      event_id: 2,
      vote: '2',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 9,
      user_id: 5,
      event_id: 2,
      vote: '1',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 10,
      user_id: 2,
      event_id: 3,
      vote: '1',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 11,
      user_id: 3,
      event_id: 3,
      vote: '1',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 12,
      user_id: 4,
      event_id: 3,
      vote: '1',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 13,
      user_id: 5,
      event_id: 3,
      vote: '2',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 14,
      user_id: 6,
      event_id: 3,
      vote: '1',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 15,
      user_id: 2,
      event_id: 4,
      vote: '2',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 16,
      user_id: 1,
      event_id: 4,
      vote: '2',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 17,
      user_id: 3,
      event_id: 4,
      vote: '1',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 18,
      user_id: 5,
      event_id: 5,
      vote: '1',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    },
    {
      id: 19,
      user_id: 6,
      event_id: 5,
      vote: '2',
      createdAt: '2017-06-02 07:52:29-07',
      updatedAt: '2017-06-02 07:52:29-07'
    }
    ])
    .then(function(){
      return queryInterface.sequelize.query('ALTER SEQUENCE "GuestLists_id_seq" RESTART 20')
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('GuestLists', [
      {
        id: 1,
        user_id: 1,
        event_id: 1,
        vote: '1',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      },
      {
        id: 2,
        user_id: 2,
        event_id: 1,
        vote: '1',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      },
      {
        id: 3,
        user_id: 4,
        event_id: 1,
        vote: '1',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      },
      {
        id: 4,
        user_id: 6,
        event_id: 1,
        vote: '2',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      },
      {
        id: 5,
        user_id: 5,
        event_id: 1,
        vote: '1',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      },
      {
        id: 6,
        user_id: 1,
        event_id: 2,
        vote: '0',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      },
      {
        id: 7,
        user_id: 2,
        event_id: 2,
        vote: '2',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      },
      {
        id: 8,
        user_id: 3,
        event_id: 2,
        vote: '2',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      },
      {
        id: 9,
        user_id: 5,
        event_id: 2,
        vote: '1',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      },
      {
        id: 10,
        user_id: 2,
        event_id: 3,
        vote: '1',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      },
      {
        id: 11,
        user_id: 3,
        event_id: 3,
        vote: '1',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      },
      {
        id: 12,
        user_id: 4,
        event_id: 3,
        vote: '1',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      },
      {
        id: 13,
        user_id: 5,
        event_id: 3,
        vote: '2',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      },
      {
        id: 14,
        user_id: 6,
        event_id: 3,
        vote: '1',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      },
      {
        id: 15,
        user_id: 2,
        event_id: 4,
        vote: '2',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      },
      {
        id: 16,
        user_id: 1,
        event_id: 4,
        vote: '2',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      },
      {
        id: 17,
        user_id: 3,
        event_id: 4,
        vote: '1',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      },
      {
        id: 18,
        user_id: 5,
        event_id: 5,
        vote: '1',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      },
      {
        id: 19,
        user_id: 6,
        event_id: 5,
        vote: '2',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07'
      }
      ])
    .then(function(){
      return queryInterface.sequelize.query('ALTER SEQUENCE "GuestLists_id_seq" RESTART 1')
    })
  }
};
