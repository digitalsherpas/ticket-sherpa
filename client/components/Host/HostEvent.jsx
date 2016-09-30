import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const HostEvent = ({ eventName, date, time, address, price }) => (
  <li className="event">
    <h4><Link to={`/hostEvents/${eventName}`}>{eventName}</Link></h4>
    <p>{date}</p>
    <p>{time}</p>
    <p>{address}</p>
    <p>{price}</p>
  </li>
);

Event.propTypes = {
  eventName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default HostEvent;
