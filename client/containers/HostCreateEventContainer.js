import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index.jsx';
import HostCreateEvent from '../components/Host/HostCreateEvent.jsx';

const mapStateToProps = state => ({
  hostEventsCreate: state.hostEventsReducer.hostEventsList,
  username: state.authReducer.username,
  addressEntered: state.eventsListReducer.checkAddressEntered,
  checkError: state.eventsListReducer.checkError,
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const HostCreateEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HostCreateEvent);

export default HostCreateEventContainer;
