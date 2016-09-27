'use strict';

const fs = require('fs');
const solc = require('solc');
const web3Connection = require('../web3.js');
const web3 = web3Connection.web3;

const verifySvc = {
  getNumAttendees: (req, res) => {
    console.log('CONTRACT ADDRESS:', req.body.contractAddress);
    const contractAddress = req.body.contractAddress;
    const fromAddress = req.body.fromAddress;
    fs.readFile(__dirname + '/../contracts/Event.sol', 'utf-8', function(err, data) {
      if (err) throw err;
        const output = solc.compile(data, 1);
      for (let contractName in output.contracts) {
        const EventContract = web3.eth.contract(JSON.parse(output.contracts[contractName].interface));
        const eventContractInstance = EventContract.at(contractAddress);
        eventContractInstance.getNumAttendees.call({
          from: fromAddress
        }, function(err, data) {
          console.log('getNumAttendees returned', err, data);
          res.send(data.toString());
        })
      }
    });
  },
  verifyAttendee: (req, res) => {
    console.log('CONTRACT ADDRESS:', req.body.contractAddress);
    const contractAddress = req.body.contractAddress;
    const fromAddress = req.body.fromAddress;
    fs.readFile(__dirname + '/../contracts/Event.sol', 'utf-8', function(err, data) {
      if (err) throw err;
        const output = solc.compile(data, 1);
      for (let contractName in output.contracts) {
        const EventContract = web3.eth.contract(JSON.parse(output.contracts[contractName].interface));
        const eventContractInstance = EventContract.at(contractAddress);
        eventContractInstance.verifyAttendee.call(fromAddress, {
          from: fromAddress
        }, function(err, data) {
          console.log('verifyAttendee returned', err, data);
          res.send(data.toString());
        });
      }
    });
  }
}

module.exports = verifySvc;