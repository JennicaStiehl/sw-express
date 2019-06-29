'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        email: 'John@Doe.com',
        password: 'password',
        updatedAt: '2019-06-28',
        createdAt: '2019-06-28'
      },
    {
      email: 'Jane@Doe.com',
      password: 'password',
      updatedAt: '2019-06-28',
      createdAt: '2019-06-28'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
