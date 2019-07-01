'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
    Location.associate = function (models) {
      Location.hasMany(Favorites);
    }
  };
  return Location;
};
