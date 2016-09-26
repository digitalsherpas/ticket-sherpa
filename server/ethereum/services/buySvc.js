'use strict';

let Web3 = require('web3');
let solc = require('solc');
let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
let fs = require('fs');


let buySvc = {
  buyTicket: (req, res) => {
    var address = req.address;
    var input = '';
    fs.readFile(__dirname + '/../contracts/Event.sol', 'utf-8', function(err, data) {
      input = data.toString();
      console.log(input);
      res.send('route working');
    });
  }
}

module.exports = buySvc;