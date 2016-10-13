import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index.jsx';
import NavSearchEvents from '../components/Search/NavSearchEvents.jsx';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const NavSearchEventsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  // actions go here mapDispatchToProps
)(NavSearchEvents);

export default NavSearchEventsContainer;
