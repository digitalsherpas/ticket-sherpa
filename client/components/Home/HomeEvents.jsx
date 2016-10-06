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
      <div>
        <ul className="homeEventsList">
          {this.props.events.map((event, i) =>
            <Event
              key={i}
              {...event}
            />
          )}
        </ul>
      </div>
    ) :
    (
      <div>
        <MDSpinner singleColor="#03a9f4" />
      </div>
    );
    return (
      <div>
        <h2>Events</h2>
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
