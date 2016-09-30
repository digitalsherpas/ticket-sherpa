const sequelize = require('./database.js');
const eventModel = require('./models/event.js');
const Promise = require('bluebird');

const controller = {
  findEvent: (req) => {
    return new Promise((fulfill, reject) => {
      eventModel.findOne({
        where: {
          eventName: req.query.eventName,
        },
      }).then((event) => {
        if (event) {
          fulfill(event);
        } else {
          reject('No events found');
        }
      });
    });
  },
  createEvent: (eventObj, res) => {
    eventModel.create({ eventName: eventObj.eventName, contractAddress: eventObj.contractAddress, createDateTime: eventObj.createDateTime, startDateTime: eventObj.startDateTime, endDateTime: eventObj.endDateTime }).then((event) => {
      console.log(`${event.eventName} added to DB`);
      res.sendStatus(200);
    }).catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
  },
  getAllEvents: () => {
    return new Promise((fulfill, reject) => {
      eventModel.findAll({
        where: {
          startDateTime: {
            $gte: new Date(),
          },
        },
      }).then((events) => {
        if (events) {
          fulfill(events);
        } else {
          reject('No events found');
        }
      });
    });
  },
};

module.exports = controller;
