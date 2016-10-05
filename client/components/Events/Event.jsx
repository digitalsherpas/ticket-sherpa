import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Event = ({ eventName, eventStartDateTime, eventEndDateTime, eventContractAddress, price }) => (
  <li className="eventsList">
    <img src="https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/a6f8620a-9d8b-424b-b36a-eb326129a059.png._CB320335955__SR285,285_.png" />
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

    <p>(((City Placeholder)))</p>
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
