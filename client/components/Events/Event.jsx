import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Moment from 'moment';

const Event = ({ eventName, description, eventStartDateTime, eventEndDateTime, eventContractAddress, price, addressLine1, addressLine2, city, state, zipPostalCode, country, id, image }) => (
  <div className="content__event-container">
    <div className="content__event-image-container">
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
          image,
        },
      }}
      ><img className="content__event-image" src={image} /></Link>
    </div>
    <div className="content__event-text">
      <h3 className="content__event-title"><Link
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
          image,
        },
      }}
      >{eventName}</Link></h3>
      <p>Date: {Moment(eventStartDateTime).format('MMM Do YYYY, h:mm A')}</p>
      <p>Price: {price / 1000000000000000000} ETH</p>
      <p>City: {city + ', ' + state}</p>
    </div>
  </div>
);

export default Event;
