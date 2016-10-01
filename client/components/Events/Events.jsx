import React, { PropTypes, Component } from 'react';
import Event from './Event.jsx';
// import searchEventsContainer from '../../containers/searchEventsContainer.js';
import SearchEvents from '../Events/SearchEvents.jsx';
import Spinner from './Spinner.jsx';
import MDSpinner from 'react-md-spinner';

export default class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rendering: false,
    };
  }

  componentWillMount() {
    this.props.requestEvents();
    this.setState({
      rendering: true,
    });
    setTimeout(() => {
      this.setState({
        rendering: false,
      });
    }, 5000);
  }

  // componentDidMount() {
  //   setTimeout(
  //     this.setState({
  //       rendering: false,
  //     })
  //   , 5000);
  // }

  render() {
    const div = this.state.rendering ?
    (
      <div className="events">
        <SearchEvents />
        <h2>Events</h2>
        <MDSpinner />
      </div>
    ) :
    (
      <div className="events">
        <SearchEvents />
        <h2>Events</h2>
        <ul>
          {this.props.events.map(event =>
            <Event
              key={event.eventName}
              {...event}
            />
          )}
        </ul>
      </div>
    );
    return (
      <div>
        { div }
      </div>
    );
  }
}

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};
