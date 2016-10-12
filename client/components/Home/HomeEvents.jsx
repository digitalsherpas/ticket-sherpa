import React, { PropTypes, Component } from 'react';
import Event from '../Events/Event.jsx';
import SearchEvents from '../Search/SearchEvents.jsx';
import MDSpinner from 'react-md-spinner';

export default class Events extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestEvents();
  }

  render() {
    const loaded = this.props.loaded ?
    (
      <ul className="home__events">
        {this.props.events.map((event, i) =>
          <div className="home__event-list-item">
            <Event
              key={i}
              {...event}
            />
          </div>
        )}
      </ul>
    ) :
    (
      <MDSpinner singleColor="#03a9f4" />
    );
    return (
      <div className="home__events-container">
        { loaded }
      </div>
    );
  }
}



// Events.propTypes = {
//   events: PropTypes.arrayOf(PropTypes.shape({
//     eventName: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     time: PropTypes.string.isRequired,
//     address: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//   }).isRequired).isRequired,
// };
