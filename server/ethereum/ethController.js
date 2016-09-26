'use strict';

const createSvc = require('./services/createSvc.js');
const buySvc = require('./services/buySvc.js');

const controller = {
  createEvent: (req, res) => {
    createSvc.createContract(req, res);
  },
  buyTicket: (req, res) => {
    buySvc.buyTicket(req, res);
  }
};

module.exports = controller;
