'use strict';

let Web3 = require('web3');
let solc = require('solc');
let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

let createSvc = {
  createContract: (req, res) => {
    var input = `contract Event {  // can be killed, so the owner gets sent the money in the end

    	address public organizer;
    	mapping (address => uint) public attendeesPaid;
    	uint public numAttendees;
    	uint public quota;

    	event PurchaseTicket(address _from, uint _amount); // so you can log the event
    	event RefundTicket(address _to, uint _amount); // so you can log the event

    	function Event() {
    		organizer = msg.sender;
    		quota = 100;
    		numAttendees = 0;
    	}

    	function buyTicket() public {
    		if (numAttendees >= quota) {
    			throw; // throw ensures funds will be returned
    		}
    		attendeesPaid[msg.sender] = msg.value;
    		if (!organizer.send(msg.value/2)) throw;
    		/*transfer(msg.value/2);*/
    		numAttendees++;
    		PurchaseTicket(msg.sender, msg.value);
    	}

    	function getNumAttendees() returns (uint numAttendees){
    		return numAttendees;
    	}

    	function changeQuota(uint newquota) public {
    		if (msg.sender != organizer) { return; }
    		quota = newquota;
    	}

    	function refundTicket(address recipient, uint amount) public {
    		if (msg.sender != organizer) { return; }
    		if (attendeesPaid[recipient] == amount) {
    			address myAddress = this;
    			if (myAddress.balance >= amount) {
    				if (!recipient.send(amount)) throw;
    				RefundTicket(recipient, amount);
    				attendeesPaid[recipient] = 0;
    				numAttendees--;
    			}
    		}
    		return;
    	}

    	function destroy() {
    		if (msg.sender == organizer) { // without this funds could be locked in the contract forever!
    			suicide(organizer);
    		}
    	}
    }
  `;

    var output = solc.compile(input, 1); // 1 activates the optimiser
    for (var contractName in output.contracts) {
        // code and ABI that are needed by web3
        console.log(contractName + ': ' + output.contracts[contractName].bytecode);
        console.log(contractName + '; ' + JSON.parse(output.contracts[contractName].interface));
        // Deploy the contract asyncronous:
        var MyContract = web3.eth.contract(JSON.parse(output.contracts[contractName].interface));
        // console.log('this is the contract ABI: ' + )
        console.log(web3.eth.getBalance(web3.eth.accounts[0]).toString());
        var mySenderAddress = web3.eth.accounts[0];
        var myContractReturned = MyContract.new({
          data: output.contracts[contractName].bytecode,
          // gas: 300000,
          // gasPrice: 500000,
          from: mySenderAddress}, function(err, myContract){
          if(!err) {
            console.log('hello world');
             // NOTE: The callback will fire twice!
             // Once the contract has the transactionHash property set and once its deployed on an address.

             // e.g. check tx hash on the first call (transaction send)
             if(!myContract.address) {
                 console.log(myContract.transactionHash) // The hash of the transaction, which deploys the contract

             // check address on the second call (contract deployed)
             } else {
                 console.log('MADE IT') // the contract address
                 console.log('checking it exists on blockchain' + web3.eth.getCode(myContract.address));
                 res.sendStatus(200);
             }

             // Note that the returned "myContractReturned" === "myContract",
             // so the returned "myContractReturned" object will also get the address set.
          } else {
            console.log(err);
          }
        });
    }


  }
};

module.exports = createSvc;
