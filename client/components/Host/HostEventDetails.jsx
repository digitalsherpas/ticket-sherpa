import React, { Component, PropTypes } from 'react';

export default class HostEventDetails extends Component {
  render() {
    const i = this.props.hostEvent.findIndex((event) => event.eventName === this.props.params.eventName);

    const eventName = this.props.hostEvent[i].eventName;
    const date = this.props.hostEvent[i].date;
    const time = this.props.hostEvent[i].time;
    const address = this.props.hostEvent[i].address;
    const price = this.props.hostEvent[i].price;


    return (
      <div>
        <h1>This is the Host EventDetailPage</h1>
        <h1>{eventName}</h1>
        <h1>{date}</h1>
        <h1>{time}</h1>
        <h1>{address}</h1>
        <h1>{price}</h1>
      </div>
    );
  }
}
