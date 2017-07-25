'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Places', [
      {
        id: 1,
        name: 'Woody’s Breakfast and Burgers',
        address_street: '4111 Ocean Blvd',
        address_city: 'San Diego',
        address_state: 'CA',
        address_zip: '92109',
        phone: '(858) 273-9663',
        yelp_rating: 4,
        image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/KVwOs6oxBTV2MqW09iUqdA/o.jpg',
        categories: 'American (Traditional)',
        review_count: 306,
        price: '$',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07',
        active: "true",
        url: 'https://www.yelp.com/biz/woodys-breakfast-and-burgers-san-diego'
      },
      {
        id: 2,
        name: 'The Broken Yolk Cafe',
        address_street: '355 6th Ave',
        address_city: 'San Diego',
        address_state: 'CA',
        address_zip: '92101',
        phone: '(619) 338-9655',
        yelp_rating: 4,
        image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/lIrTxkMsQN67d9YbdXcBqQ/o.jpg',
        categories: 'Breakfast & Brunch',
        review_count: 1254,
        price: '$$',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07',
        active: "true",
        url: 'https://www.yelp.com/biz/the-broken-yolk-cafe-san-diego-4'
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
        name: "Lucky's Lunch Counter",
        address_street: '338 7th Ave',
        address_city: 'San Diego',
        address_state: 'CA',
        address_zip: '92101',
        phone: '(619) 255-4782',
        yelp_rating: 4,
        image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/ZRQRU4PMMBTVck1V7UpcnQ/o.jpg',
        categories: 'Breakfast & Brunch',
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
        name: 'Woody’s Breakfast and Burgers',
        address_street: '4111 Ocean Blvd',
        address_city: 'San Diego',
        address_state: 'CA',
        address_zip: '92109',
        phone: '(858) 273-9663',
        yelp_rating: 4,
        image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/KVwOs6oxBTV2MqW09iUqdA/o.jpg',
        categories: 'American (Traditional)',
        review_count: 306,
        price: '$',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07',
        active: "true",
        url: 'https://www.yelp.com/biz/woodys-breakfast-and-burgers-san-diego'
      },
      {
        id: 2,
        name: 'The Broken Yolk Cafe',
        address_street: '355 6th Ave',
        address_city: 'San Diego',
        address_state: 'CA',
        address_zip: '92101',
        phone: '(619) 338-9655',
        yelp_rating: 4,
        image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/lIrTxkMsQN67d9YbdXcBqQ/o.jpg',
        categories: 'Breakfast & Brunch',
        review_count: 1254,
        price: '$$',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07',
        active: "true",
        url: 'https://www.yelp.com/biz/the-broken-yolk-cafe-san-diego-4'
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
        name: "Lucky's Lunch Counter",
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
