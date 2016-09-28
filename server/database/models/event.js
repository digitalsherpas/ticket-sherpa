const Sequelize = require('sequelize');
const sequelize = require('../database');

var Event = sequelize.define('event', {
  eventName: {
    type: Sequelize.STRING
  },
  contractAddress: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
Event.sync().then(function () {
  // Table created
  // return Event.create({
  //   firstName: 'John',
  //   lastName: 'Hancock'
  // });
});

module.exports = Event;
