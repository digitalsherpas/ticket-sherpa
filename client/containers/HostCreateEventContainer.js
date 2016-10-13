import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index.jsx';
import HostCreateEvent from '../components/Host/HostCreateEvent.jsx';

const mapStateToProps = state => ({
  hostEventsCreate: state.hostEventsReducer.hostEventsList,
  username: state.authReducer.username,
  addressEntered: state.eventsListReducer.checkAddressEntered,
  serverError: state.eventsListReducer.checkServerError,
  geoencodeError: state.eventsListReducer.checkGeoencodeError,
  geoencodeServerError: state.eventsListReducer.checkGeoencodeServerError,
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const HostCreateEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HostCreateEvent);

export default HostCreateEventContainer;
