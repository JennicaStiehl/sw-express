'use strict';
const User = require('../models/user')
const Favorites = require('../models/favorites')

module.exports = (sequelize, DataTypes) => {
  const Favorites = sequelize.define('Favorites', {
    user_id: DataTypes.INTEGER,
    location_id: DataTypes.INTEGER
  }, {});
  Favorites.associate = function(models) {
    // associations can be defined here
    Favorites.assoicate = function (models) {
      Favorites.belongsTo(User);
    Favorites.associate = function (models) {
      Favorites.belongsTo(Location);
    }
    }
  };
  return Favorites;
};
User.Favorites = User.hasMany(Favorites);
Location.Favorites = Location.hasMany(Favorites);
