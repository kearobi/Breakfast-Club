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
        updatedAt: "2017-06-02 14:52:29",
        admin: "false"
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
        updatedAt: "2017-06-02 14:52:29",
        admin: "false"
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
        updatedAt: "2017-06-02 14:52:29",
        admin: "false"
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
        updatedAt: "2017-06-02 14:52:29",
        admin: "false"
      },
      {
        id: 5,
        firstName: "admin",
        lastName: "admin",
        email: "breakfastclub.sd@gmail.com",
        neighborhood: "NA",
        voted: "false",
        encryptedPassword: '2e95b7fc77f6c3b7ab9f233cf673acf2b056f974aaad5f160e885d881f7e7e3c1484a98b93141b71a2999e1688ef635b2eb3d18923ad11411b5e47e2a20f4f4c',
        authToken: "4d2acac0-4a3d-11e7-b752-a928b03d6170",
        authTokenExpiration: '2017-07-05 22:21:20.620',
        salt: 'b4c554c0-6054-11e7-b54f-e525e42391ac',
        createdAt: "2017-07-03 14:52:29",
        updatedAt: "2017-07-03 14:52:29",
        admin: "true"
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
        updatedAt: "2017-06-02 14:52:29",
        admin: "false"
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
        updatedAt: "2017-06-02 14:52:29",
        admin: "false"
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
        updatedAt: "2017-06-02 14:52:29",
        admin: "false"
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
        updatedAt: "2017-06-02 14:52:29",
        admin: "false"
      },
      {
        id: 5,
        firstName: "admin",
        lastName: "admin",
        email: "breakfastclub.sd@gmail.com",
        neighborhood: "NA",
        voted: "false",
        encryptedPassword: '2e95b7fc77f6c3b7ab9f233cf673acf2b056f974aaad5f160e885d881f7e7e3c1484a98b93141b71a2999e1688ef635b2eb3d18923ad11411b5e47e2a20f4f4c',
        authToken: "4d2acac0-4a3d-11e7-b752-a928b03d6170",
        authTokenExpiration: '2017-07-05 22:21:20.620',
        salt: 'b4c554c0-6054-11e7-b54f-e525e42391ac',
        createdAt: "2017-07-03 14:52:29",
        updatedAt: "2017-07-03 14:52:29",
        admin: "true"
      }
    ])
    .then(function(){
      return queryInterface.sequelize.query('ALTER SEQUENCE "Users_id_seq" RESTART 1')
    })


  }
};
