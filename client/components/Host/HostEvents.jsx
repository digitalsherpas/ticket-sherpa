import React, { PropTypes, Component } from 'react';
import HostEvent from '../Host/HostEvent.jsx';

export default class HostEvents extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestHostEvents(this.props.username);
  }

  render() {
    return (
      <div className="content__container">
        <h2>My Created Events</h2>
        <hr></hr>
        <p>All Events</p>
        <ul className="content__events-list">
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
