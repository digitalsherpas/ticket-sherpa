import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index.jsx';
import HostEvents from '../components/Host/HostEvents.jsx';

const mapStateToProps = state => ({
  hostEvents: state.hostEventsReducer.hostEventsList,
  username: state.authReducer.username
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const HostEventsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HostEvents);

export default HostEventsContainer;
