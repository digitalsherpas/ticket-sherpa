import { connect } from 'react-redux'
import Event from '../components/Event.jsx'

const getVisibleEvents = (event, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return event
    default: 
      return event
  }
}

const mapStateToProps = (state) => ({
  event: getVisibleEvents(state.event, state.visibilityFilter)
})

const EventDetailsContainer = connect(
  mapStateToProps
  // actions go here mapDispatchToProps
)(Event)

export default EventDetailsContainer