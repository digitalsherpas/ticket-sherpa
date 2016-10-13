import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Moment from 'moment';

const HostEvent = ({ eventName, eventStartDateTime }) => (
  <div className="content__event-container">
    <h4><Link to={`/hostevents/${eventName}`}>{eventName}</Link></h4>
    <p>{Moment().format('MMM Do YYYY, h:mm A')}</p>
  </div>
);

HostEvent.propTypes = {
  eventName: PropTypes.string.isRequired,
};

export default HostEvent;
