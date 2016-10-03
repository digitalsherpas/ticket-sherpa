import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index.jsx';
import Login from '../components/Login/Login.jsx';

const mapStateToProps = state => ({
  auth: state.loginReducer.auth,
  authenticating: state.loginReducer.authenticating,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  // actions go here mapDispatchToProps
)(Login);

export default LoginContainer;
