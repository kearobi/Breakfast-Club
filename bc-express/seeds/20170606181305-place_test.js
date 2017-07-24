'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Places', [
      {
        id: 1,
        name: 'Breakfast Republic',
        address_street: '2730 University Ave',
        address_city: 'San Diego',
        address_state: 'CA',
        address_zip: '92104',
        phone: '(619) 642-0299',
        yelp_rating: 4,
        image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/bi2QeQyCdUmC42BKDisGJw/o.jpg',
        categories: 'American (Traditional)',
        review_count: 1536,
        price: '$$',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07',
        active: "true",
        url: 'https://www.yelp.com/biz/breakfast-republic-san-diego'
      },
      {
        id: 2,
        name: 'The Misson',
        address_street: '1250 J St',
        address_city: 'San Diego',
        address_state: 'CA',
        address_zip: '92101',
        phone: '(619) 232-7662',
        yelp_rating: 4,
        image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/5HWVqW_SYTnM9XHtfi51Cg/ls.jpg',
        categories: 'Breakfast',
        review_count: 1800,
        price: '$$',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07',
        active: "true",
        url: 'https://www.yelp.com/biz/the-mission-san-diego-4'
      },
      {
        id: 3,
        name: 'Lazy Hippo',
        address_street: '416 3rd Ave',
        address_city: 'San Diego',
        address_state: 'CA',
        address_zip: '92101',
        phone: '(619) 546-6289',
        yelp_rating: 4,
        image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/D8FWQeP3Kxtn4ZDJlsyzqQ/o.jpg',
        categories: 'American (Traditional)',
        review_count: 163,
        price: '$$',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07',
        active: "true",
        url: 'https://www.yelp.com/biz/lazy-hippo-san-diego-2'
      },
      {
        id: 4,
        name: 'Luckys Lunch Counter',
        address_street: '338 7th Ave',
        address_city: 'San Diego',
        address_state: 'CA',
        address_zip: '92101',
        phone: '(619) 255-4782',
        yelp_rating: 4,
        image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/ZRQRU4PMMBTVck1V7UpcnQ/o.jpg',
        categories: 'Breakfast',
        review_count: 509,
        price: '$',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07',
        active: "true",
        url: 'https://www.yelp.com/biz/luckys-lunch-counter-san-diego'
      }
    ])
    .then(function(){
      return queryInterface.sequelize.query('ALTER SEQUENCE "Places_id_seq" RESTART 5')
    })
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Places', [
      {
        id: 1,
        name: 'Breakfast Republic',
        address_street: '2730 University Ave',
        address_city: 'San Diego',
        address_state: 'CA',
        address_zip: '92104',
        phone: '(619) 642-0299',
        yelp_rating: 4,
        image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/bi2QeQyCdUmC42BKDisGJw/o.jpg',
        categories: 'American (Traditional)',
        review_count: 1536,
        price: '$$',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07',
        active: "true",
        url: 'https://www.yelp.com/biz/breakfast-republic-san-diego'
      },
      {
        id: 2,
        name: 'The Misson',
        address_street: '1250 J St',
        address_city: 'San Diego',
        address_state: 'CA',
        address_zip: '92101',
        phone: '(619) 232-7662',
        yelp_rating: 4,
        image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/5HWVqW_SYTnM9XHtfi51Cg/ls.jpg',
        categories: 'Breakfast',
        review_count: 1800,
        price: '$$',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07',
        active: "true",
        url: 'https://www.yelp.com/biz/the-mission-san-diego-4'
      },
      {
        id: 3,
        name: 'Lazy Hippo',
        address_street: '416 3rd Ave',
        address_city: 'San Diego',
        address_state: 'CA',
        address_zip: '92101',
        phone: '(619) 546-6289',
        yelp_rating: 4,
        image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/D8FWQeP3Kxtn4ZDJlsyzqQ/o.jpg',
        categories: 'American (Traditional)',
        review_count: 163,
        price: '$$',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07',
        active: "true",
        url: 'https://www.yelp.com/biz/lazy-hippo-san-diego-2'
      },
      {
        id: 4,
        name: 'Luckys Lunch Counter',
        address_street: '338 7th Ave',
        address_city: 'San Diego',
        address_state: 'CA',
        address_zip: '92101',
        phone: '(619) 255-4782',
        yelp_rating: 4,
        image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/ZRQRU4PMMBTVck1V7UpcnQ/o.jpg',
        categories: 'Breakfast',
        review_count: 509,
        price: '$',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07',
        active: "true",
        url: 'https://www.yelp.com/biz/luckys-lunch-counter-san-diego'
      }
    ])
    .then(function(){
      return queryInterface.sequelize.query('ALTER SEQUENCE "Places_id_seq" RESTART 1')
    })
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
