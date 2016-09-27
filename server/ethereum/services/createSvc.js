'use strict';

const contractHelper = require('../contracts/contractHelpers.js');
const web3Connection = require('../web3.js');
const web3 = web3Connection.web3;

const createSvc = {
  createContract: (req, res) => {
    const senderAddress = req.body.senderAddress;
    const price = req.body.ticketPrice;
    const title = req.body.eventTitle;
    const quota = req.body.quota;
    const eventContractInstance = web3.eth.contract(contractHelper.contractObj).new(title, price, quota, {
      data: contractHelper.bytecode,
      // gas: 300000,
      // gasPrice: 500000,
      from: senderAddress
    }, function(err, contract) {
      if (!err) {
        // NOTE: The callback will fire twice!
        // Once the contract has the transactionHash property set and once its deployed on an address
        // e.g. check tx hash on the first call (transaction send)
        if (!contract.address) {
          // console.log(contract.transactionHash) // The hash of the transaction, which deploys the contract
          // check address on the second call (contract deployed)
        } else {
          // console.log('checking it exists on blockchain' + web3.eth.getCode(contract.address));
          eventContractInstance.CreateEvent(function(error, result) {
            if (error) {
              console.log(error)
            } else {
              console.log('Event successfully created')
              console.log('  Event organizer address: ' + result.args._organizer.toString());
              console.log('  Event title: ' + result.args._title.toString());
              console.log('  Event price: ' + result.args._price.toString());
              console.log('  Event quota: ' + result.args._quota.toString());
              console.log('  Current number of attendees: ' + result.args._numAttendees.toString());
            }
          });
          res.send('Contract address is: ' + contract.address);
        }
      } else {
        console.log(err);
      }
    });
  }
};

module.exports = createSvc;
