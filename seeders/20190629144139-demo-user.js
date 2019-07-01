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
    return queryInterface.bulkInsert('Locations', [{
      city: 'Denver',
      state: 'CO'
    },
    {
      city: 'Portland',
      state: 'OR'
    },
    {
      city: 'Seattle',
      state: 'WA'
    }
    }])
    return queryInterface.bulkInsert('Favorites', [{
      user_id: User.findAll({where: {email: 'Jane@Doe.com'}),
      location_id: Location.findAll({where: {city: 'Portland'}})
    },
    {
      user_id: User.findAll({where: {email: 'John@Doe.com'}),
      location_id: Location.findAll({where: {city: 'Portland'}})
    }
    }])
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
