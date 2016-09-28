'use strict';

const createSvc = require('./services/createSvc');
const buySvc = require('./services/buySvc');
const verifySvc = require('./services/verifySvc')
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
    let event = dbController.readEvents(req);
    readSvc.readEvent(event.contractAddress, res);
  }
};

module.exports = controller;
