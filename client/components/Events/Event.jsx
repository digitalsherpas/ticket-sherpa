import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Moment from 'moment';

const Event = ({ eventName, description, eventStartDateTime, eventEndDateTime, eventContractAddress, price, addressLine1, addressLine2, city, state, zipPostalCode, country, id }) => (
  <li>
    <Link
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
        id,
      },
    }}
    ><img src="http://tctechcrunch2011.files.wordpress.com/2008/04/linux-penguin-small.png" /></Link>
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
        id,
      },
    }}
    >{eventName}</Link></h2>
    <p>Date: {Moment().format('MMMM Do YYYY, h:mm A')}</p>
    <p>Price: {price}</p>
    <p>City: {city}</p>
  </li>
);

export default Event;
