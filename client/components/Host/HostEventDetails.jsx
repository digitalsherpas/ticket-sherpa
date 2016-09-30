import React, { Component } from 'react';

export default class EventDetails extends Component {
  render() {
    console.log(this.props);
    const i = this.props.hostEvent.findIndex((event) => event.eventName === this.props.params.hostEventName);
    console.log(i);

    const eventName = this.props.hostEvent[i].eventName;
    const date = this.props.hostEvent[i].date;
    const time = this.props.hostEvent[i].time;
    const address = this.props.hostEvent[i].address;
    const price = this.props.hostEvent[i].price;


    return (
      <div>
        <h1>This is the Host EventDetailPage</h1>
        {eventName}
        {date}
        {time}
        {address}
        {price}
      </div>
    );
  }
}
