import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index.jsx';
import HomeEvents from '../components/Home/HomeEvents.jsx';

const mapStateToProps = state => ({
  events: state.eventsListReducer.eventsList,
  loaded: state.eventsListReducer.receiveEvents,
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const HomeEventsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeEvents);

export default HomeEventsListContainer;
