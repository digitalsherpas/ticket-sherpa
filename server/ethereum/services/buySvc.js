'use strict';

let Web3 = require('web3');
let solc = require('solc');
let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
let fs = require('fs');

let buySvc = {
  buyTicket: (req, res) => {
    var contractAddress = req.address;
    var input = '';
    fs.readFile(__dirname + '/../contracts/Event.sol', 'utf-8', function(err, data) {
      input = data.toString();
      var output = solc.compile(input, 1);
      compiledContract = output.contracts['Event'];
      var MyContract = web3.eth.contract(JSON.parse(compiledContract)); //abi
      var mySenderAddress = web3.eth.accounts[0];
      var contractInstance = MyContract.at(contractAddress);
      res.send(JSON.stringify(contractInstance));//TODO
    });
  }
}

module.exports = buySvc;