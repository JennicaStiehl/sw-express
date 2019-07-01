'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    password_digest: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.associate = function (models) {
      User.hasMany.(Favorites);
    }
  };
  return User;
};
