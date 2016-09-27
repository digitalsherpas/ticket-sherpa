'use strict';

const fs = require('fs');
const solc = require('solc');
const web3Connection = require('../web3.js');
const web3 = web3Connection.web3;

const buySvc = {
  buyTicket: (req, res) => {
    console.log('ADDRESS IS', req.body.contractAddress);
    const contractAddress = req.body.contractAddress; //address of deployed contract;
    const fromAddress = req.body.fromAddress;
    fs.readFile(__dirname + '/../contracts/Event.sol', 'utf-8', function(err, data) {
      if (err) throw err;
      const output = solc.compile(data, 1);
      for (let contractName in output.contracts) {
        // Deploy the contract asynchronous:
        const EventContract = web3.eth.contract(JSON.parse(output.contracts[contractName].interface));
        const eventContractInstance = EventContract.at(contractAddress);
        eventContractInstance.buyTicket({
          from: fromAddress,
          value: 10,
          gas: 200000
        }, function(err, result) {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        });

      }
      
    });
  }
}

module.exports = buySvc;