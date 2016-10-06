import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index.jsx';
import SignUp from '../components/SignUp.jsx';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

export default SignUpContainer;
