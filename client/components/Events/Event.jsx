import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Moment from 'moment';

const Event = ({ eventName, description, eventStartDateTime, eventEndDateTime, eventContractAddress, price, addressLine1, addressLine2, city, state, zipPostalCode, country, id }) => (
  <li>
    <div className="home__event-container">
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
      ><img className="home__event-image" src={require('../../styles/images/ticketsherpa-logo.png')} /></Link>
    </div>
    <div className="home__event-text">
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
      <p>Price: {price / 1000000000000000000} ETH</p>
      <p>City: {city + ', ' + state}</p>
    </div>
  </li>
);

export default Event;
