'use strict';

const contractHelper = require('../contracts/contractHelpers.js');
const web3Connection = require('../web3.js');
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
        res.status(200).send('Number of attendees: ' + result.args._numAttendees.toString());
      }
    })
  }
}

module.exports = buySvc;
