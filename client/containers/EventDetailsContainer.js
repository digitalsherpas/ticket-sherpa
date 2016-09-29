import { connect } from 'react-redux';
import Event from '../components/Events/Event.jsx';

const mapStateToProps = (state) => ({
  events: state.event,
})

const EventDetailsContainer = connect(
  mapStateToProps
  // actions go here mapDispatchToProps
)(Event);

export default EventDetailsContainer;
