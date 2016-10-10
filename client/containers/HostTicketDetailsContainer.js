import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index.jsx';
import HostTicketDetails from '../components/Host/HostTicketDetails.jsx';

const mapStateToProps = state => ({
  hostTickets: state.hostTicketsReducer.hostTicketList,
  username: state.authReducer.username,
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const HostTicketDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HostTicketDetails);

export default HostTicketDetailsContainer;
