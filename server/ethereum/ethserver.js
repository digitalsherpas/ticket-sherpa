'use strict';

const config = require('../../config');
const express = require('express');
const ethController = require('./ethController.js');
const app = express();
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

const allowCrossDomain = function(req, res, next) { //enable CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Access-Control-Max-Age', 10);
  // intercept OPTIONS method
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
};

app.use(allowCrossDomain);
app.use(jsonParser);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/api/createEvent', (req, res) => {
  ethController.createEvent(req, res);
});

app.post('/api/buyTicket', (req, res) => {
  ethController.buyTicket(req, res);
})

app.post('/api/getNumAttendees', (req, res) => {
  ethController.getNumAttendees(req, res);
})

app.post('/api/verifyAttendee', (req, res) => {
  ethController.verifyAttendee(req, res);
})

const server = app.listen(config.ETH_SERVER_PORT, function() {
  console.log('Running on', config.ETH_SERVER_PORT);
});

module.exports = server;
