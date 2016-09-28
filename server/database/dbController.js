const sequelize = require('./database.js');
const eventModel = require('./models/event.js');

const controller = {
  readEvents: (req) => {
    eventModel.findAll({
      where: {
        eventTitle: req.body.eventName
      }
    }).then((event) => {
      if (event) {
        return event;
      } else {
        return null;
      }
    });
  },
  createEvent: (eventObj, res) => {
    eventModel.create({
      eventName: eventObj.eventName,
      contractAddress: eventObj.contractAddress
    }).then((event) => {
      console.log(event.eventName + ' added to DB');
      res.sendStatus(200);
    })
  }
}

module.exports = controller;
