import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index.jsx';
import BuyEvent from '../components/Events/BuyEvent.jsx';

const mapStateToProps = state => ({
  username: state.authReducer.username
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

const BuyEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyEvent);

export default BuyEventContainer;
