import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index.jsx';
import HostTickets from '../components/Host/HostTickets.jsx';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const HostTicketsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HostTickets);

export default HostTickets;
