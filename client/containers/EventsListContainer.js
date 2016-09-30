import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index.jsx';
import Events from '../components/Events/Events.jsx';

const mapStateToProps = state => ({
  events: state.eventsListReducer.eventsList,
});

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(actionCreators, dispatch);
// };

const EventsListContainer = connect(
  mapStateToProps,
)(Events);

export default EventsListContainer;
