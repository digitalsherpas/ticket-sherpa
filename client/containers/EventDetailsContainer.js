import { connect } from 'react-redux';
import Event from '../components/Events/Event.jsx';

const mapStateToProps = state => ({
  event: state.eventDetailsContainer,
});

const EventDetailsContainer = connect(
  mapStateToProps
  // actions go here mapDispatchToProps
)(Event);

export default EventDetailsContainer;
