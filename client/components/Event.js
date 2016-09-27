import React, { PropTypes } from 'react';

const Event = ({ eventName, date, time, address, price }) => (
  <li>
    <h4>{eventName}</h4>
    <p>{date}</p>
    <p>{time}</p>
    <p>{address}</p>
    <p>{price}</p>
  </li>
)

Event.propTypes = {
  eventName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default Event