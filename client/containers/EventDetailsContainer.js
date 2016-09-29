import { connect } from 'react-redux';
import EventDetails from '../components/Events/EventDetails.jsx';

const mapStateToProps = (state) => ({
  event: state.eventDetailsReducer,
});

const EventDetailsContainer = connect(
  mapStateToProps
  // actions go here mapDispatchToProps
)(EventDetails);

export default EventDetailsContainer;
