import React, { PropTypes, Component } from 'react';
import Event from './Event.jsx';
import MDSpinner from 'react-md-spinner';
import MapsContainer from '../../containers/MapsContainer.js';

export default class Events extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    const searchEventsLength = this.props.searchEventsList.length === 0 ?
    (
      <div>
        <h2>No events were found</h2>
      </div>
    ) :
    (
      <div>
      </div>
    )

    const loaded = this.props.loaded ?
    (
      <div className="events">
        <div className="events__search">
        </div>
        <div className="events__content">
          <div className="events__map-container">
            <MapsContainer />
          </div>


          <div className="events__list">
            <h2>Events</h2>
            {searchEventsLength}
            <div className="events__list-ul">
              {this.props.searchEventsList.map((event, i) =>
                <Event
                  key={i}
                  {...event}
                  className=".events__list-ul--li"
                />
              )}
            </div>
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
    return (
      <div>
        { loaded }
      </div>
    );
  }
}
