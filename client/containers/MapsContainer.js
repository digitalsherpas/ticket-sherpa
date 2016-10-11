import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index.jsx';
import Maps from '../components/Events/Maps.jsx';

const mapStateToProps = state => ({
  // this is where the mapped state will be
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const MapsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Maps);

export default MapsContainer;
