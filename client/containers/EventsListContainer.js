import { connect } from 'react-redux';
import Events from '../components/Events/Events.jsx';

const mapStateToProps = (state) => ({
  events: state.eventsListReducer.eventsList,
});

const EventsListContainer = connect(
  mapStateToProps
  // actions go here mapDispatchToProps
)(Events);

export default EventsListContainer;
