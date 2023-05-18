'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const user = require('./user.model');

const POSTGRES_URL ='postgresql://localhost:5432/usersdb';

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  } : {};

let sequelize = new Sequelize(POSTGRES_URL,sequelizeOptions);

// let userModel = user(sequelize,DataTypes);

module.exports = {
    db: sequelize,
    Users : user(sequelize,DataTypes)
}