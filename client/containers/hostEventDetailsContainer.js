import { connect } from 'react-redux';
import HostEventDetails from '../components/Host/HostEventsDetails.jsx';

const mapStateToProps = (state) => ({
  hostEvents: state.hostEventsReducer.hostEventsList,
});

const HostEventDetailsContainer = connect(
  mapStateToProps
  // actions go here mapDispatchToProps
)(HostEventDetails);

export default HostEventDetailsContainer;
