import React, { PropTypes } from 'react'
import Event from './Event'

const Events = ({ events }) => (
  <ul>
    {events.map(event => 
      <Event 
        key={event.eventName}
        {...event}
      />
    )}
  </ul>
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