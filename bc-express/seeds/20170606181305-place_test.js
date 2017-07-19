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
        phone: '+16196420299',
        yelp_rating: 4,
        image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/bi2QeQyCdUmC42BKDisGJw/o.jpg',
        categories: 'American (Traditional)',
        review_count: 1536,
        price: '$$',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07',
        active: "true"
      },
      {
        id: 2,
        name: 'Bob Republic',
        address_street: '2730 University Ave',
        address_city: 'San Diego',
        address_state: 'CA',
        address_zip: '92104',
        phone: '+16196420299',
        yelp_rating: 3,
        image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/bi2QeQyCdUmC42BKDisGJw/o.jpg',
        categories: 'Breakfast',
        review_count: 126,
        price: '$$$',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07',
        active: "true"
      },
      {
        id: 3,
        name: 'Smeakfast Republic',
        address_street: '2730 University Ave',
        address_city: 'San Diego',
        address_state: 'CA',
        address_zip: '92104',
        phone: '+16196420299',
        yelp_rating: 4,
        image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/bi2QeQyCdUmC42BKDisGJw/o.jpg',
        categories: 'American (Traditional)',
        review_count: 1536,
        price: '$$',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07',
        active: "true"
      },
      {
        id: 4,
        name: 'Smob Republic',
        address_street: '2730 University Ave',
        address_city: 'San Diego',
        address_state: 'CA',
        address_zip: '92104',
        phone: '+16196420299',
        yelp_rating: 3,
        image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/bi2QeQyCdUmC42BKDisGJw/o.jpg',
        categories: 'Breakfast',
        review_count: 126,
        price: '$$$',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07',
        active: "true"
      }
    ])
    .then(function(){
      return queryInterface.sequelize.query('ALTER SEQUENCE "Places_id_seq" RESTART 10')
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
        name: 'Breakfast Republic',
        address_street: '2730 University Ave',
        address_city: 'San Diego',
        address_state: 'CA',
        address_zip: '92104',
        phone: '+16196420299',
        yelp_rating: 4,
        image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/bi2QeQyCdUmC42BKDisGJw/o.jpg',
        categories: 'American (Traditional)',
        review_count: 1536,
        price: '$$',
        active: "true"
      },
      {
        name: 'Bob Republic',
        address_street: '2730 University Ave',
        address_city: 'San Diego',
        address_state: 'CA',
        address_zip: '92104',
        phone: '+16196420299',
        yelp_rating: 3,
        image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/bi2QeQyCdUmC42BKDisGJw/o.jpg',
        categories: 'Breakfast',
        review_count: 126,
        price: '$$$',
        active: "true"
      },
      {
        id: 3,
        name: 'Smeakfast Republic',
        address_street: '2730 University Ave',
        address_city: 'San Diego',
        address_state: 'CA',
        address_zip: '92104',
        phone: '+16196420299',
        yelp_rating: 4,
        image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/bi2QeQyCdUmC42BKDisGJw/o.jpg',
        categories: 'American (Traditional)',
        review_count: 1536,
        price: '$$',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07',
        active: "true"
      },
      {
        id: 4,
        name: 'Smob Republic',
        address_street: '2730 University Ave',
        address_city: 'San Diego',
        address_state: 'CA',
        address_zip: '92104',
        phone: '+16196420299',
        yelp_rating: 3,
        image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/bi2QeQyCdUmC42BKDisGJw/o.jpg',
        categories: 'Breakfast',
        review_count: 126,
        price: '$$$',
        createdAt: '2017-06-02 07:52:29-07',
        updatedAt: '2017-06-02 07:52:29-07',
        active: "true"
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
