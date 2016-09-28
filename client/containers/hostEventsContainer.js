import { connect } from 'react-redux'
import HostEvents from '../components/Host/HostEvents.jsx'

const mapStateToProps = (state) => ({
  myEvents: JSON.stringify(state.hostevents[0])
})

const mapDispatchToProps = (state) => ({
  log: function() {
    console.log('test');
  }
})

const HostEventsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HostEvents)

export default HostEventsContainer