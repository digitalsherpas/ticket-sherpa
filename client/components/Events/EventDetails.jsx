import React from 'react';
import { Link } from 'react-router';

const EventDetails = ({params: { eventName }, location: { query }}) => (
  <div>
    <img src="http://tctechcrunch2011.files.wordpress.com/2008/04/linux-penguin-small.png" />
    <h4>Event Name: {eventName}</h4>
    <h4>Contract Address: {query.eventContractAddress}</h4>
    <p>Description: {query.description}</p>
    <p>Price: {query.price}</p>
    <p>Start Date:{query.eventStartDateTime}</p>
    <p>End Date: {query.eventEndDateTime}</p>
    <p>Street Address: {query.addressLine1}</p>
    <p>Address Line 2: {query.addressLine2}</p>
    <p>City: {query.city}</p>
    <p>State: {query.state}</p>
    <p>Zip/Postal Code: {query.zipPostalCode}</p>
    <p>Country: {query.country}</p>
    <p>Contract Address: {query.eventContractAddress}</p>
    <h4><Link
      to={{ pathname:
        '/buyevent/' + eventName,
        query: {
          eventName,
          contractAddress: query.eventContractAddress,
        },
    }}
    >Buy Ticket</Link></h4>

  </div>
);

export default EventDetails;
