const contractHelper = require('../contracts/contractHelpers.js');
const web3Connection = require('../web3.js');
const loggers = require('../loggers/events.js');

const web3 = web3Connection.web3;

const buySvc = {
  buyTicket: (req, res) => {
    const contractAddress = req.body.contractAddress; // address of deployed contract;
    const fromAddress = req.body.fromAddress;
    const name = req.body.name;
    const eventContractInstance = web3.eth.contract(contractHelper.contractObj).at(contractAddress);
    const opts = {
      from: fromAddress,
      value: req.body.price,
    };
    if (req.body.gas) {
      opts.gas = req.body.gas;
    }

    eventContractInstance.buyTicket(name, opts, (err) => {
      if (err) {
        console.log(err);
        loggers(eventContractInstance).ExceedQuota();
        loggers(eventContractInstance).InsufficientEther();
        res.sendStatus(500);
      } else {
        loggers(eventContractInstance).PurchaseTicket((error, result) => {
          res.status(200).send(`Number of attendees: ${result.args._numAttendees.toString()}`);
        });
      }
    });
  },
};

module.exports = buySvc;
