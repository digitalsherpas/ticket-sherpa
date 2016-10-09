import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Moment from 'moment';

const HostEvent = ({ eventName, eventStartDateTime }) => (
  <li className="host-event-list-item">
    <h4><Link to={`/hostevents/${eventName}`}>{eventName}</Link></h4>
    <p>{Moment().format('MMMM Do YYYY, h:mm A')}</p>
  </li>
);

HostEvent.propTypes = {
  eventName: PropTypes.string.isRequired,
};

export default HostEvent;
