import React from 'react';
import { Link } from 'react-router';

const EventDetails = ({params: { eventName }, location: { query }}) => {
  const contractAddress = query.eventContractAddress;
  return (
    <div>
      <h4>Event Name: {eventName}</h4>
      <p>Start Date:{query.eventStartDateTime}</p>
      <p>End Date:{query.eventEndDateTime}</p>
      <p>Price: {query.price}</p>
      <p>Address: {contractAddress}</p>
      <h4><Link 
        to={{ pathname:
          '/buyevent/' + eventName,
          query: {
            eventName,
            contractAddress,
          },
      }}
      >Buy Ticket</Link></h4>

    </div>
  );
};

export default EventDetails;
