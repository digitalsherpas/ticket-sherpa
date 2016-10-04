import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index.jsx';
import SearchEvents from '../components/Events/SearchEvents.jsx';

const mapStateToProps = state => ({
  searchEvents: state.eventsListReducer.searchEvents,
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const SearchEventsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  // actions go here mapDispatchToProps
)(SearchEvents);

export default SearchEventsContainer;
