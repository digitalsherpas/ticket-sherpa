import React, { PropTypes } from 'react';
import HostEvent from '../Host/HostEvent.jsx';

// creates an events array for the eventsListContainer
const HostEvents = ({ hostEvents }) => (
  <div className="hostEvents">
    <h2>Host Events</h2>
    <ul>
      {hostEvents.map((hostEvent, i) =>
        <HostEvent
          key={i}
          i={i}
          {...hostEvent}
        />
      )}
    </ul>
  </div>
);

HostEvents.propTypes = {
  hostEvents: PropTypes.arrayOf(PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default HostEvents;
