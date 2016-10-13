import React, { PropTypes, Component } from 'react';
import MapEvent from './MapEvent.jsx';
import MDSpinner from 'react-md-spinner';
import MapsContainer from '../../containers/MapsContainer.js';

export default class Events extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  searchResults() {
    if (this.props.searchEventsList.length === 0) {
      return (
        <div>
          <h2>No events were found</h2>
        </div>
      )
    } else {
      return (
        null
      );
    }
  }

  renderFunction() {
    const loaded = this.props.loaded ?
    (
      <div className="event__container-map-list">
      <div>
        <h2 className="map__events-header">Events</h2>
      </div>
      <div className="events__content">

      <div className="map__list">
      {this.searchResults()}
      {this.props.searchEventsList.map((event, i) =>
        <MapEvent
        key={i}
        {...event}
        className="events__list-ul--li"
        />
      )}
      </div>
        <div className="map">
        <MapsContainer />
        </div>

      </div>
      </div>
    ) :
    (
      <div className="events">
        <h2>Events</h2>
        <MDSpinner singleColor="#03a9f4" />
      </div>
    );
    return loaded;
  }

  render() {

    return (
      this.renderFunction()
    );
  }
}
