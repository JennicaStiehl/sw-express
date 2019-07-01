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
    const users = await queryInterface.sequelize.query(
  `SELECT id from USERS;`
);
    const userRows = users[0];

    return queryInterface.bulkInsert('Locations', [{
      city: 'Denver',
      state: 'CO',
      updatedAt: '2019-06-28',
      createdAt: '2019-06-28'
    },
    {
      city: 'Portland',
      state: 'OR',
      updatedAt: '2019-06-28',
      createdAt: '2019-06-28'
    },
    {
      city: 'Seattle',
      state: 'WA',
      updatedAt: '2019-06-28',
      createdAt: '2019-06-28'
    }
    }], {});

    const locations = await queryInterface.sequelize.query(
      'SELECT id FROM LOCATIONS;'
    );
    const locationRows = locations[0];

    return queryInterface.bulkInsert('Favorites', [{
      user_id: userRows[0].id,
      location_id: locationRows[0].id,
      updatedAt: '2019-06-28',
      createdAt: '2019-06-28'
    },
    {
      user_id: userRows[0].id,
      location_id: locationRows[0].id,
      updatedAt: '2019-06-28',
      createdAt: '2019-06-28'
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
      return queryInterface.bulkDelete('Locations', null, {});
      return queryInterface.bulkDelete('Favorites', null, {});
};
