'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      PASSWORD for both test seeds is test123
    */
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        firstName: "Gabe",
        lastName: "Giestas",
        email: "gabe@testing.com",
        neighborhood: "Normal Heights",
        voted: "false",
        rsvp: "false",
        encryptedPassword: 'c14e5a43ee5d1659827dae4672bcbbd4139c2e8d6e8baedccef47a74d02a4aeef48d0783420938c411c0ca84d6c999944f3caa612842333195fde7575f354dc0',
        authToken: "4d2acac0-4a3d-11e7-b752-a928b03d6170",
        authTokenExpiration: '2017-07-05 22:21:20.620',
        salt: '4d294420-4a3d-11e7-b752-a928b03d6170',
        createdAt: "2017-06-02 14:52:29",
        updatedAt: "2017-06-02 14:52:29"
      },
      {
        id: 2,
        firstName: "Alex",
        lastName: "Tickle",
        email: "Alex@testing.com",
        neighborhood: "OB",
        voted: "false",
        rsvp: "false",
        encryptedPassword: '18c2124ee01f16ad42f3fbd083c2e881b7669250f3414265d718491e4637f6bcd924d438280c57b0c91e566e670b776060b6c3b97d8fb0daaf89c94aa0a1061e',
        authToken: "d0591910-4a3d-11e7-ade9-89fb70fedb01",
        authTokenExpiration: '2017-07-05 22:25:00.705 +00:00',
        salt: 'd05807a0-4a3d-11e7-ade9-89fb70fedb01',
        createdAt: "2017-06-02 14:52:29",
        updatedAt: "2017-06-02 14:52:29"
      },
      {
        id: 3,
        firstName: "Rachel",
        lastName: "Ruderman",
        email: "rachel@testing.com",
        neighborhood: "PB",
        voted: "false",
        rsvp: "false",
        encryptedPassword: 'c14e5a43ee5d1659827dae4672bcbbd4139c2e8d6e8baedccef47a74d02a4aeef48d0783420938c411c0ca84d6c999944f3caa612842333195fde7575f354dc0',
        authToken: "4d2acac0-4a3d-11e7-b752-a928b03d6170",
        authTokenExpiration: '2017-07-05 22:21:20.620 +00:00',
        salt: '4d294420-4a3d-11e7-b752-a928b03d6170',
        createdAt: "2017-06-02 14:52:29",
        updatedAt: "2017-06-02 14:52:29"
      },
      {
        id: 4,
        firstName: "Sergio",
        lastName: "Alvarado",
        email: "sergio@testing.com",
        neighborhood: "North County",
        voted: "false",
        rsvp: "false",
        encryptedPassword: '18c2124ee01f16ad42f3fbd083c2e881b7669250f3414265d718491e4637f6bcd924d438280c57b0c91e566e670b776060b6c3b97d8fb0daaf89c94aa0a1061e',
        authToken: "d0591910-4a3d-11e7-ade9-89fb70fedb01",
        authTokenExpiration: '2017-07-05 22:25:00.705',
        salt: 'd05807a0-4a3d-11e7-ade9-89fb70fedb01',
        createdAt: "2017-06-02 14:52:29",
        updatedAt: "2017-06-02 14:52:29"
      }
    ])
    .then(function(){
      return queryInterface.sequelize.query('ALTER SEQUENCE "Users_id_seq" RESTART 10')
    })
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
        firstName: "Gabe",
        lastName: "Giestas",
        email: "gabe@testing.com",
        neighborhood: "Normal Heights",
        voted: "false",
        rsvp: "false",
        encryptedPassword: 'c14e5a43ee5d1659827dae4672bcbbd4139c2e8d6e8baedccef47a74d02a4aeef48d0783420938c411c0ca84d6c999944f3caa612842333195fde7575f354dc0',
        authToken: "4d2acac0-4a3d-11e7-b752-a928b03d6170",
        authTokenExpiration: '2017-07-05 22:21:20.620',
        salt: '4d294420-4a3d-11e7-b752-a928b03d6170',
        createdAt: "2017-06-02 14:52:29",
        updatedAt: "2017-06-02 14:52:29"
      },
      {
        id: 2,
        firstName: "Alex",
        lastName: "Tickle",
        email: "Alex@testing.com",
        neighborhood: "OB",
        voted: "false",
        rsvp: "false",
        encryptedPassword: '18c2124ee01f16ad42f3fbd083c2e881b7669250f3414265d718491e4637f6bcd924d438280c57b0c91e566e670b776060b6c3b97d8fb0daaf89c94aa0a1061e',
        authToken: "d0591910-4a3d-11e7-ade9-89fb70fedb01",
        authTokenExpiration: '2017-07-05 22:25:00.705 +00:00',
        salt: 'd05807a0-4a3d-11e7-ade9-89fb70fedb01',
        createdAt: "2017-06-02 14:52:29",
        updatedAt: "2017-06-02 14:52:29"
      },
      {
        id: 3,
        firstName: "Rachel",
        lastName: "Ruderman",
        email: "rachel@testing.com",
        neighborhood: "PB",
        voted: "false",
        rsvp: "false",
        encryptedPassword: 'c14e5a43ee5d1659827dae4672bcbbd4139c2e8d6e8baedccef47a74d02a4aeef48d0783420938c411c0ca84d6c999944f3caa612842333195fde7575f354dc0',
        authToken: "4d2acac0-4a3d-11e7-b752-a928b03d6170",
        authTokenExpiration: '2017-07-05 22:21:20.620 +00:00',
        salt: '4d294420-4a3d-11e7-b752-a928b03d6170',
        createdAt: "2017-06-02 14:52:29",
        updatedAt: "2017-06-02 14:52:29"
      },
      {
        id: 4,
        firstName: "Sergio",
        lastName: "Alvarado",
        email: "sergio@testing.com",
        neighborhood: "North County",
        voted: "false",
        rsvp: "false",
        encryptedPassword: '18c2124ee01f16ad42f3fbd083c2e881b7669250f3414265d718491e4637f6bcd924d438280c57b0c91e566e670b776060b6c3b97d8fb0daaf89c94aa0a1061e',
        authToken: "d0591910-4a3d-11e7-ade9-89fb70fedb01",
        authTokenExpiration: '2017-07-05 22:25:00.705',
        salt: 'd05807a0-4a3d-11e7-ade9-89fb70fedb01',
        createdAt: "2017-06-02 14:52:29",
        updatedAt: "2017-06-02 14:52:29"
      }
    ])
    .then(function(){
      return queryInterface.sequelize.query('ALTER SEQUENCE "Users_id_seq" RESTART 1')
    })


  }
};
