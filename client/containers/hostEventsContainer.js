import { connect } from 'react-redux';
import HostEvents from '../components/Host/HostEvents.jsx';

const mapStateToProps = (state) => ({
  hostEvents: state.hostEventsReducer.hostEventsList,
});

const HostEventsContainer = connect(
  mapStateToProps,
  // actions go here mapDispatchToProps
)(HostEvents);

export default HostEventsContainer;
