pragma solidity ^0.4.2;

contract Event {  // can be killed, so the owner gets sent the money in the end

  address public organizer;
  mapping (address => bool) public attendeesPaid;
  uint public numAttendees;
  uint public quota;
  uint public price;
  string public title;

  event PurchaseTicket(address _from, uint _amount, uint _numAttendees); // so you can log the event
  event RefundTicket(address _to, uint _amount); // so you can log the event
  event InsufficientEther(uint _amountSent, uint _price);
  event CreateEvent(address _organizer, uint _numAttendees, uint _quota, uint _price, string _title);
  event ExceedQuota(uint _numAttendees, uint _quota);

  function Event(string title, uint price, uint quota) { //TODO: add params to customize the event
    organizer = msg.sender;
    title = title;
    price = price;
    quota = quota;
    numAttendees = 0;
    CreateEvent(organizer, numAttendees, quota, price, title);
  }

  function buyTicket() payable {
    if (numAttendees > quota) {
      ExceedQuota(numAttendees, quota);
      throw; // throw ensures funds will be returned
    }

    if (msg.value < price) { //
      InsufficientEther(msg.value, price);
      throw;
    }

    attendeesPaid[msg.sender] = true;
    if (!organizer.send(msg.value)) throw; //send ether but catch error
    numAttendees++;
    PurchaseTicket(msg.sender, msg.value, numAttendees);
  }

  function getNumAttendees() constant returns (uint){
    return numAttendees;
  }

  function verifyAttendee(address attendee) constant returns (bool) {
    if (attendeesPaid[attendee]) {
      return true;
    } else {
      return false;
    }
  }

  // function refundTicket(address recipient, uint amount) public {
  //   if (msg.sender != organizer) { return; }
  //   if (attendeesPaid[recipient] == amount) {
  //     address myAddress = this;
  //     if (myAddress.balance >= amount) {
  //       if (!recipient.send(amount)) throw;
  //       RefundTicket(recipient, amount);
  //       attendeesPaid[recipient] = 0;
  //       numAttendees--;
  //     }
  //   }
  //   return;
  // }

  function destroy() {
    if (msg.sender == organizer) { // without this funds could be locked in the contract forever!
      suicide(organizer);
    }
  }
}
