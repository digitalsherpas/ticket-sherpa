'use strict';

const createSvc = require('./services/createSvc');
const buySvc = require('./services/buySvc');
const verifySvc = require('./services/verifySvc')

const controller = {
  createEvent: (req, res) => {
    createSvc.createContract(req, res);
  },
  buyTicket: (req, res) => {
    buySvc.buyTicket(req, res);
  },
  getNumAttendees: (req, res) => {
    verifySvc.getNumAttendees(req, res);
  }

};

module.exports = controller;
