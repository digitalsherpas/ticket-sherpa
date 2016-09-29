const contractHelper = require('../contracts/contractHelpers.js');
const web3Connection = require('../web3.js');

const web3 = web3Connection.web3;

const verifySvc = {
  getNumAttendees: (req, res) => {
    const contractAddress = req.body.contractAddress;
    const fromAddress = req.body.fromAddress;
    const eventContractInstance = web3.eth.contract(contractHelper.contractObj).at(contractAddress);
    eventContractInstance.getNumAttendees.call({
      from: fromAddress,
    }, (err, data) => {
      res.status(200).send(data.toString());
    });
  },
  verifyAttendee: (req, res) => {
    const contractAddress = req.body.contractAddress;
    const fromAddress = req.body.fromAddress;
    const eventContractInstance = web3.eth.contract(contractHelper.contractObj).at(contractAddress);
    eventContractInstance.verifyAttendee.call(fromAddress, {
      from: fromAddress,
    }, (err, data) => {
      res.status(200).send(data.toString());
    });
  },
};

module.exports = verifySvc;
