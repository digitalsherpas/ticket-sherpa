const sequelize = require('./database.js');
const eventModel = require('./models/event.js');
const Promise = require('bluebird');

const controller = {
  readEvents: (req) => {
    return new Promise((fulfill, reject) => {
      eventModel.findOne({
        where: {
          eventName: req.query.eventName
        }
      }).then((event) => {
        if (event) {
          fulfill(event);
        } else {
          reject('No events found');
        }
      });
    })
  },
  createEvent: (eventObj, res) => {
    eventModel.create({eventName: eventObj.eventName, contractAddress: eventObj.contractAddress}).then((event) => {
      console.log(event.eventName + ' added to DB');
      res.sendStatus(200);
    })
  }
};

module.exports = controller;
