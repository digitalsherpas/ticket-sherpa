'use strict';

let createSvc = require('./services/createSvc.js');

let controller = {
  createEvent: (req, res) => {
    createSvc.createContract(req, res);
  }
};

module.exports = controller;
