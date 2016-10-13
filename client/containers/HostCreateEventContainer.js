import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index.jsx';
import HostCreateEvent from '../components/Host/HostCreateEvent.jsx';

const mapStateToProps = state => ({
  hostEventsCreate: state.hostEventsReducer.hostEventsList,
  username: state.authReducer.username,
  SERVER_ERROR: state.eventsListReducer.SERVER_ERROR,
  GEOENCODE_ERROR: state.eventsListReducer.GEOENCODE_ERROR,
  GEOENCODE_SERVER_ERROR: state.eventsListReducer.GEOENCODE_SERVER_ERROR,
  NO_ADDRESS: state.eventsListReducer.NO_ADDRESS,
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const HostCreateEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HostCreateEvent);

export default HostCreateEventContainer;
