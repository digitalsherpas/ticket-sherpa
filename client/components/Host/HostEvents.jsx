import React, { PropTypes, Component } from 'react';
import HostEvent from '../Host/HostEvent.jsx';
import axios from 'axios';

export default class HostEvents extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestHostEvents(this.props.username);
    axios.get()
  }

  render() {
    return (
      <div className="hostEvents">
        <h2>My Events</h2>

        <hr></hr>
        <p>All Events</p>
        <ul>
          {this.props.hostEvents.map((hostEvent, i) =>
            <HostEvent
              key={i}
              {...hostEvent}
            />
          )}
        </ul>
      </div>
    );
  }
}

HostEvents.propTypes = {
  hostEvents: PropTypes.arrayOf(PropTypes.shape({
    eventName: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
