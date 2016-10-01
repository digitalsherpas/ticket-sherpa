import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Event = ({ eventName, eventStartDateTime, price }) => (
  <li className="eventsList">
    <h4><Link
      to={{ pathname:
      '/events/' + eventName,
      query: {
        eventName,
        eventStartDateTime,
        price,
      },
    }}
    >{eventName}</Link></h4>
    <p>{eventStartDateTime}</p>
    <p>{price}</p>
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
