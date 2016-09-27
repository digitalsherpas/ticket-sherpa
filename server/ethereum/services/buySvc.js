'use strict';

const fs = require('fs');
const solc = require('solc');
const web3Connection = require('../web3.js');
const web3 = web3Connection.web3;

const buySvc = {
  buyTicket: (req, res) => {
    const contractAddress = req.body.contractAddress; //address of deployed contract;
    const fromAddress = req.body.fromAddress;
    fs.readFile(__dirname + '/../contracts/Event.sol', 'utf-8', function(err, data) {
      if (err)
        throw err;
      const output = solc.compile(data, 1);
      for (let contractName in output.contracts) {
        const EventContract = web3.eth.contract(JSON.parse(output.contracts[contractName].interface));
        const eventContractInstance = EventContract.at(contractAddress);
        eventContractInstance.buyTicket({
          from: fromAddress,
          value: 10,
          gas: 200000
        }, function(err, result) {
          if (err) {
            console.log(err);
            eventContractInstance.ExceedQuota(function(error, result) {
              if (error) {
                console.log('Error with Exceed Quota Event', error);
              } else {
                console.log('Error: Quota Exceeded');
                console.log('  Current number of attendees: ' + result.args._numAttendees.toString());
                console.log('  Quota: ' + result.args._numAttendees.toString());
              }
            });
            eventContractInstance.InsufficientEther(function(error, result) {
              if (error) {
                console.log('Error with Insufficient Ether Event', error);
              } else {
                console.log('Error: Insufficient Ether Sent');
                console.log('  Ether sent: ' + result.args._amountSent.toString());
                console.log('  Price: ' + result.args._price.toString());
              }
            });
            res.sendStatus(500);
          } else {
            console.log('hello world');
            eventContractInstance.PurchaseTicket(function(error, result) {
              if (error) {
                console.log('Error with Purchase Ticket Event', error);
              } else {
                console.log('Ticket successfully bought')
                console.log('  Ticket buyer address: ' + result.args._from.toString());
                console.log('  Ether sent: ' + result.args._amount.toString());
                console.log('  Curret number of attendees: ' + result.args._numAttendees.toString());
              }
            })
            res.sendStatus(200);
          }
        })
      }
    })
  }
}

module.exports = buySvc;
