contract Event {  // can be killed, so the owner gets sent the money in the end

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
