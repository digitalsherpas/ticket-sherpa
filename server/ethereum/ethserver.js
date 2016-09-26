'use strict';

let config = require('../../config');
let express = require('express');
let ethController = require('./ethController.js');
let app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/api/createEvent', (req, res) => {
  ethController.createEvent(req, res);
});

app.post('/api/buyTicket', (req, res) => {
  ethController.buyTicket(req, res);
})

app.listen(config.ETH_SERVER_PORT, function() {
  console.log('Running on', config.ETH_SERVER_PORT);
});

let Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
