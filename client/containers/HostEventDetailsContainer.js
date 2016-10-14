import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HostEventDetails from '../components/Host/HostEventDetails.jsx';
import * as actionCreators from '../actions/index.jsx';

const mapStateToProps = state => ({
  hostEvent: state.hostEventsReducer.hostEventsList,
  eventNumAttendees: state.hostEventsReducer.hostCurrentEventNumberOfAttendees,
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const HostEventDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HostEventDetails);

export default HostEventDetailsContainer;
