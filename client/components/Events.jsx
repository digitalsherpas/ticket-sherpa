import React, { PropTypes } from 'react'
import Event from './Event.jsx'

const Events = ({ events }) => (
  <div className="events">
    <h2>Events</h2>
    <ul>
      {events.map(event => 
        <Event 
          key={event.eventName}
          {...event}
        />
      )}
    </ul>
  </div>
)

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default Events