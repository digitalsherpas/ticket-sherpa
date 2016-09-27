pragma solidity ^0.4.2;

contract Event {  // can be killed, so the owner gets sent the money in the end

	address public organizer;
	mapping (address => bool) public attendeesPaid;
	uint public numAttendees;
	uint public quota;
	uint public price;
	string title;

	event PurchaseTicket(address _from, uint _amount); // so you can log the event
	event RefundTicket(address _to, uint _amount); // so you can log the event
	event MoneySent(uint _amount);

	function Event() { //TODO: add params to customize the event
		organizer = msg.sender;
		title = 'Cool Event';
		price = 10;
		quota = 100;
		numAttendees = 0;
	}

	function buyTicket() payable {
		if (numAttendees > quota) {
			throw; // throw ensures funds will be returned
		}

		if (msg.value != price) { //
			MoneySent(msg.value);
			throw;
		}

		attendeesPaid[msg.sender] = true;
		numAttendees++;
		if (!organizer.send(msg.value)) throw; //send ether but catch error
		PurchaseTicket(msg.sender, msg.value);
	}

	function getNumAttendees() constant returns (uint){
		return numAttendees;
	}

	// function refundTicket(address recipient, uint amount) public {
	// 	if (msg.sender != organizer) { return; }
	// 	if (attendeesPaid[recipient] == amount) {
	// 		address myAddress = this;
	// 		if (myAddress.balance >= amount) {
	// 			if (!recipient.send(amount)) throw;
	// 			RefundTicket(recipient, amount);
	// 			attendeesPaid[recipient] = 0;
	// 			numAttendees--;
	// 		}
	// 	}
	// 	return;
	// }

	function destroy() {
		if (msg.sender == organizer) { // without this funds could be locked in the contract forever!
			suicide(organizer);
		}
	}
}
