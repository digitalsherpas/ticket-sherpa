module.exports = function(eventContractInstance) {
  return {
    ExceedQuota: (cb) => {
      let watcher = eventContractInstance.ExceedQuota((error, result) => {
        if (error) {
          console.log('Error with Exceed Quota Event', error);
        } else {
          console.log('Error: Quota with Exceeded');
          console.log('  Current number of attendees: ' + result.args._numAttendees.toString());
          console.log('  Quota: ' + result.args._numAttendees.toString());
        }

        if (typeof cb === 'function') {
          cb(error, result);
        }
        watcher.stopWatching(); //only logs one event
      });
    },
    InsufficientEther: (cb) => {
      let watcher = eventContractInstance.InsufficientEther((error, result) => {
        if (error) {
          console.log('Error with Insufficient Ether Event', error);
        } else {
          console.log('Error: Insufficient Ether Sent');
          console.log('  Ether sent: ' + result.args._amountSent.toString());
          console.log('  Price: ' + result.args._price.toString());
        }
        
        if (typeof cb === 'function') {
          cb(error, result);
        }
        watcher.stopWatching();
      });
    },
    PurchaseTicket: (cb) => {
      let watcher = eventContractInstance.PurchaseTicket((error, result) => {
        if (error) {
          console.log('Error with Purchase Ticket Event', error);
        } else {
          console.log('Ticket successfully bought')
          console.log('  Ticket buyer address: ' + result.args._from.toString());
          console.log('  Ether sent: ' + result.args._amount.toString());
          console.log('  Current number of attendees: ' + result.args._numAttendees.toString());
        }
        
        if (typeof cb === 'function') {
          cb(error, result);
        }
        watcher.stopWatching();
      });
    },
    CreateEvent: (cb) => {
      let watcher = eventContractInstance.CreateEvent((error, result) => {
        if (error) {
          console.log(error)
        } else {
          console.log('Event successfully created')
          console.log('  Event organizer address: ' + result.args._organizer.toString());
          console.log('  Event title: ' + result.args._title.toString());
          console.log('  Event price: ' + result.args._price.toString());
          console.log('  Event quota: ' + result.args._quota.toString());
          console.log('  Current number of attendees: ' + result.args._numAttendees.toString());
        }

        if (typeof cb === 'function') {
          cb(error, result);
        }
        watcher.stopWatching();
      });
    }
  }
}