import { connect } from 'react-redux'
import HostEvents from '../components/Host/HostCreateEvent.jsx'

const mapStateToProps = (state) => ({
  myEvents: JSON.stringify(state.hostevents[0])
})

const HostEventsContainer = connect(
  mapStateToProps,
  // actions go here mapDispatchToProps
)(HostEvents)

export default HostEventsContainer