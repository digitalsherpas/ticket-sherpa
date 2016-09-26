'use strict';

const createSvc = require('./services/createSvc.js');

const controller = {
  createEvent: (req, res) => {
    createSvc.createContract(req, res);
  }
};

module.exports = controller;
