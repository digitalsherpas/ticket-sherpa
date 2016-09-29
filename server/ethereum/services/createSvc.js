const contractHelper = require('../contracts/contractHelpers.js');
const web3Connection = require('../web3.js');
const loggers = require('../loggers/events.js');
const Promise = require('bluebird');

const web3 = web3Connection.web3;

const createSvc = {
  createContract: (req) => {
    return new Promise((fulfill, reject) => {
      const senderAddress = req.body.senderAddress || web3.eth.accounts[0];
      const price = req.body.ticketPrice;
      const eventName = req.body.eventName;
      const quota = req.body.quota;
      const startDateTime = new Date(req.body.startDateTime).getTime();
      const endDateTime = new Date(req.body.endDateTime).getTime();
      const eventContractInstance = web3.eth.contract(contractHelper.contractObj).new(eventName, price, quota, (new Date()).getTime(), startDateTime, endDateTime, {
        data: contractHelper.bytecode,
        // gas: 300000,
        // gasPrice: 500000,
        from: senderAddress,
      }, (err, contract) => {
        if (!err) {
          // NOTE: The callback will fire twice!
          // Once the contract has the transactionHash property set and once its deployed on an address
          // e.g. check tx hash on the first call (transaction send)
          if (!contract.address) {
            // console.log(contract.transactionHash) // The hash of the transaction, which deploys the contract
            // check address on the second call (contract deployed)
          } else {
            loggers(eventContractInstance).CreateEvent();
            fulfill({
              contractAddress: contract.address,
              eventName: eventName
            });
            // res.send('Contract address is: ' + contract.address);
          }
        } else {
          console.log(err);
          reject(err);
        }
      });
    })
  }
};

module.exports = createSvc;
