const Sequelize = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
  },
});

// force: true will drop the table if it already exists
User.sync().then(() => {
  // Table created
  // return Event.create({
  //   firstName: 'John',
  //   lastName: 'Hancock'
  // });
});

module.exports = User;
