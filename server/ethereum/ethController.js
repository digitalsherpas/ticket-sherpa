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
    dbController.readEvents(req)
    .then((event) => {
      readSvc.readEvent(req, res, event.contractAddress);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  },
};

module.exports = controller;
