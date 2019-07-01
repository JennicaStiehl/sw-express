'use strict';
const User = require('../models/user')
const Favorites = require('../models/favorites')

module.exports = (sequelize, DataTypes) => {
  const Favorites = sequelize.define('Favorites', {
    user_id: DataTypes.INTEGER,
    location_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  Favorites.associate = function(models) {
      Favorites.belongsTo.Users;
      Favorites.belongsTo.Locations;
    }
  return Favorites;
};
