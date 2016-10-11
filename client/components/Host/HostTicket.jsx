import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const HostTicket = ({ eventName, eventStartDateTime }) => (
  <li className="host-event-list-item">
    <h4><Link to={`/tickets/${eventName}`}>{eventName}</Link></h4>
  </li>
);

HostTicket.propTypes = {
  eventName: PropTypes.string.isRequired,
};

export default HostTicket;
