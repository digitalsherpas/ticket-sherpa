const createSvc = require('./services/createSvc');
const buySvc = require('./services/buySvc');
const verifySvc = require('./services/verifySvc');
const readSvc = require('./services/readSvc');
const dbController = require('../database/dbController.js');

const controller = {
  createEvent: (req, res) => {
    createSvc.createContract(req).then((returnObj) => {
      dbController.createEvent(returnObj, res);
    });
  },
  buyTicket: (req, res) => {
    buySvc.buyTicket(req, res);
  },
  getNumAttendees: (req, res) => {
    verifySvc.getNumAttendees(req, res);
  },
  verifyAttendee: (req, res) => {
    verifySvc.verifyAttendee(req, res);
  },
  findEvent: (req, res) => {
    dbController.findEvent(req)
    .then((event) => {
      const eventObj = readSvc.readEvent(event.contractAddress);
      res.status(200).send(eventObj);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  },
  getAllEvents: (req, res) => {
    dbController.getAllEvents(req)
    .then((events) => {
      const resultArray = events.map(event => readSvc.readEvent(event.contractAddress));
      res.status(200).send(resultArray);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  },
};

module.exports = controller;
