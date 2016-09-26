'use strict';

let express = require('express');
let ethController = require('./ethereum/ethController.js');
let app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/api/createEvent', (req, res) => {
  ethController.createEvent(req, res);
});

app.listen(3000, function() {
  console.log('Running on 3000');
});

let Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
