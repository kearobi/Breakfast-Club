'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Places', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      address_street: {
        type: Sequelize.STRING
      },
      address_city: {
        type: Sequelize.STRING
      },
      address_state: {
        type: Sequelize.STRING
      },
      address_zip: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      yelp_rating: {
        type: Sequelize.INTEGER
      },
      image_url: {
        type: Sequelize.STRING
      },
      categories: {
        type: Sequelize.STRING
      },
      review_count: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Places');
  }
};
