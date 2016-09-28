'use strict';

const contractHelper = require('../contracts/contractHelpers.js');
const web3Connection = require('../web3.js');
const loggers = require('../loggers/events.js');
const web3 = web3Connection.web3;

const buySvc = {
  buyTicket: (req, res) => {
    const contractAddress = req.body.contractAddress; //address of deployed contract;
    const fromAddress = req.body.fromAddress;
    const eventContractInstance = web3.eth.contract(contractHelper.contractObj).at(contractAddress);
    eventContractInstance.buyTicket({
      from: fromAddress,
      value: 10,
      // gas: 200000
    }, function(err, result) {
      if (err) {
        console.log(err);
        loggers(eventContractInstance).ExceedQuota();
        loggers(eventContractInstance).InsufficientEther();
        res.sendStatus(500);
      } else {
        loggers(eventContractInstance).PurchaseTicket((error, result) => {
          res.status(200).send('Number of attendees: ' + result.args._numAttendees.toString());
        })
      }
    })
  }
}

module.exports = buySvc;
