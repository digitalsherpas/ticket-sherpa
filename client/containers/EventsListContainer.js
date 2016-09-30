import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index.jsx';
import Events from '../components/Events/Events.jsx';

const mapStateToProps = state => ({
  events: state.eventsListReducer.eventsList,
  otherEvents: state.eventsListReducer.events,
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const EventsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Events);

export default EventsListContainer;
