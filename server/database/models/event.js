const Sequelize = require('sequelize');
const sequelize = require('../database');

const Event = sequelize.define('event', {
  eventName: {
    type: Sequelize.STRING,
  },
  contractAddress: {
    type: Sequelize.STRING,
  },
  createDateTime: {
    type: Sequelize.DATE,
  },
  startDateTime: {
    type: Sequelize.DATE,
  },
  endDateTime: {
    type: Sequelize.DATE,
  },
});

// force: true will drop the table if it already exists
Event.sync().then(() => {
  // Table created
  // return Event.create({
  //   firstName: 'John',
  //   lastName: 'Hancock'
  // });
});

module.exports = Event;
