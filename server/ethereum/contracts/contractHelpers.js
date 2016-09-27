'use strict';

const fs = require('fs');
const solc = require('solc');

// TODO: Make this asynchronous with a cache
const data = fs.readFileSync(__dirname + '/../contracts/Event.sol', 'utf8');
const output = solc.compile(data, 1); // 1 activates the optimiser
let contract;
let bytecode;
for (let contractName in output.contracts) {
   contract = JSON.parse(output.contracts[contractName].interface);
   bytecode = output.contracts[contractName].bytecode;
}

module.exports = {
  contractObj: contract,
  bytecode: bytecode,
}
