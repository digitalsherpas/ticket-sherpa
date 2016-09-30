'use strict';

const Sequelize = require('sequelize');

var sequelize = new Sequelize(`postgres://${process.env.DATABASEUSER || 'postgres'}:${process.env.DATABASEPASSWORD || 'password'}@10.8.24.135:5432/tickether`);

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelize;
