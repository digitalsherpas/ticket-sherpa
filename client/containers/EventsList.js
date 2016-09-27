import { connect } from 'react-redux'
import Events from '../components/Events.jsx'

const getVisibleEvents = (events, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return events
    default: 
      return events
  }
}

const mapStateToProps = (state) => ({
  events: getVisibleEvents(state.events, state.visibilityFilter)
})

const EventsList = connect(
  mapStateToProps
)(Events)

export default EventsList