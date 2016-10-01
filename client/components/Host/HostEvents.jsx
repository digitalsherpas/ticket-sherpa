import React, { PropTypes, Component } from 'react';
import HostEvent from '../Host/HostEvent.jsx';

export default class HostEvents extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestEvents();
  }

  render() {
    return (
      <div className="hostEvents">
        <h2>Host Events</h2>
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
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};
