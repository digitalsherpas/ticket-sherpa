import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const HostEvent = ({ eventName }) => (
  <li className="event">
    <h4><Link to={`/hostevents/${eventName}`}>{eventName}</Link></h4>
  </li>
);

HostEvent.propTypes = {
  eventName: PropTypes.string.isRequired,
};

export default HostEvent;
