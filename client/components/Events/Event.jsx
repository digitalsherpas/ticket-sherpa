import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Moment from 'moment';

const Event = ({ eventName, description, eventStartDateTime, eventEndDateTime, eventContractAddress, price, addressLine1, addressLine2, city, state, zipPostalCode, country, id }) => (
  <li className="home__event-item">
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
