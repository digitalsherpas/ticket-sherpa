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

const EventsListContainer = connect(
  mapStateToProps
  // actions go here mapDispatchToProps
)(Events)

export default EventsListContainer