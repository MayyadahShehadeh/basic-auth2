'use strict';

// Create a Sequelize model
const Users = (sequelize, Datatypes) => sequelize.define('User', {
    username: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    password: {
      type: Datatypes.STRING,
      allowNull: false,
    }
  });

  module.exports = Users;