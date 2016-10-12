import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index.jsx';
import SearchEvents from '../components/Search/SearchEvents.jsx';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const EventsSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  // actions go here mapDispatchToProps
)(SearchEvents);

export default EventsSearchContainer;
