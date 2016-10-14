import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Moment from 'moment';

const HostEvent = ({ eventName, eventStartDateTime }) => (
  <Link to={`/hostevents/${eventName}`}>
  <div className="content__event-container">
    <h4>{eventName}</h4>
    <p>{Moment(eventStartDateTime).format('MMM Do YYYY, h:mm A')}</p>
  </div>
  </Link>
);

HostEvent.propTypes = {
  eventName: PropTypes.string.isRequired,
};

export default HostEvent;
