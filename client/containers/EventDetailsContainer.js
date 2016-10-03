import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index.jsx';
import EventDetails from '../components/Events/EventDetails.jsx';

const mapStateToProps = state => ({
  event: state.eventsListReducer.selectEvent,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

const EventDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  // actions go here mapDispatchToProps
)(EventDetails);

export default EventDetailsContainer;
