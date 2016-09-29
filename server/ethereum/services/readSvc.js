'use strict';

const contractHelper = require('../contracts/contractHelpers.js');
const web3Connection = require('../web3.js');
const loggers = require('../loggers/events.js');
const web3 = web3Connection.web3;

const readSvc = {
  readEvent: (req, res, eventContractAddress) => {
    const eventContractInstance = web3.eth.contract(contractHelper.contractObj).at(eventContractAddress);
    const eventObj = {
      organizer: eventContractInstance.organizer.toString(),
      numAttendees: eventContractInstance.numAttendees().toString(),
      attendeesPaid: eventContractInstance.attendeesPaid(), //TODO: Parse this mapping variable correctly
      quota: eventContractInstance.quota().toString(),
      price: eventContractInstance.price().toString(),
      eventName: eventContractInstance.eventName().toString()
    }
    res.status(200).send(eventObj);
  }
}

module.exports = readSvc;
