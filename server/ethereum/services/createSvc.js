'use strict';

const fs = require('fs');
const solc = require('solc');
const web3Connection = require('../web3.js');
const web3 = web3Connection.web3;

const senderAddress = web3.eth.accounts[0];

const createSvc = {
  createContract: (req, res) => {
    const price = req.body.ticketPrice;
    const title = req.body.eventTitle;
    const quota = req.body.quota;
    fs.readFile(__dirname + '/../contracts/Event.sol', 'utf8', (err, data) => {
      if (err) throw err;
      const output = solc.compile(data, 1); // 1 activates the optimiser
      for (let contractName in output.contracts) {
        // Deploy the contract asyncronous:
        const EventContract = web3.eth.contract(JSON.parse(output.contracts[contractName].interface));
        const eventContractInstance = EventContract.new(title, price, quota, {
          data: output.contracts[contractName].bytecode,
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
            // Note that the returned "eventContractInstance" === "myContract",
            // so the returned "eventContractInstance" object will also get the address set.
          } else {
            console.log(err);
          }
        });
      }
    });
  }
};

module.exports = createSvc;
