import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Event = ({ eventName, eventStartDateTime, eventEndDateTime, eventContractAddress, price }) => (
  <li className="eventsList">
    <h2><Link
      to={{ pathname:
      '/events/' + eventName,
      query: {
        eventName,
        eventStartDateTime,
        eventEndDateTime,
        eventContractAddress,
        price,
      },
    }}
    >{eventName}</Link></h2>
    <p>Date: {eventStartDateTime}</p>
    <p>Price: {price}</p>
  </li>
);

// Event.propTypes = {
//   eventName: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   time: PropTypes.string.isRequired,
//   address: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };

export default Event;
