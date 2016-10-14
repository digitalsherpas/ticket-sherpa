import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index.jsx';
import HostVerify from '../components/Host/HostVerify.jsx';

const mapStateToProps = state => ({
  ticketIsVerified: state.verifyReducer.ticketIsVerified,
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const HostVerifyContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HostVerify);

export default HostVerifyContainer;
