import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index.jsx';
import Nav from '../components/Nav.jsx';

const mapStateToProps = state => ({
  auth: state.authReducer.auth,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  // actions go here mapDispatchToProps
)(Nav);

export default NavContainer;
