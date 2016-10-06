import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Event = ({ eventName, description, eventStartDateTime, eventEndDateTime, eventContractAddress, price, addressLine1, addressLine2, city, state, zipPostalCode, country }) => (
  <li>
    <img src="http://tctechcrunch2011.files.wordpress.com/2008/04/linux-penguin-small.png" />
    <h2><Link
      to={{ pathname:
      '/events/' + eventName,
      query: {
        eventName,
        description,
        eventStartDateTime,
        eventEndDateTime,
        eventContractAddress,
        price,
        addressLine1,
        addressLine2,
        city,
        state,
        zipPostalCode,
        country,
      },
    }}
    >{eventName}</Link></h2>
    <p>Date: {eventStartDateTime}</p>
    <p>Price: {price}</p>
    <p>City: {city}</p>
  </li>
);

export default Event;
