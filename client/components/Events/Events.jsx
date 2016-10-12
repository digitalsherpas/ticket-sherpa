import React, { PropTypes, Component } from 'react';
import Event from './Event.jsx';
import EventsSearchContainer from '../../containers/EventsSearchContainer.js';
import MDSpinner from 'react-md-spinner';
import MapsContainer from '../../containers/MapsContainer.js';

export default class Events extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    const loaded = this.props.loaded ?
    (
      <div className="events">
        <div className="events__search">
          <EventsSearchContainer />
        </div>

        <div className="events__content">
          <div className="events__map-container">
            <MapsContainer />
          </div>

          <div className="events__list">
            <h2>Events</h2>
            <ul>
              {this.props.searchEventsList.map((event, i) =>
                <Event
                  key={i}
                  {...event}
                />
              )}
            </ul>
          </div>
        </div>
      </div>
    ) :
    (
      <div className="events">
        <EventsSearchContainer />
        <h2>Events</h2>
        <MDSpinner singleColor="#03a9f4" />
      </div>
    );
    return (
      <div>
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
