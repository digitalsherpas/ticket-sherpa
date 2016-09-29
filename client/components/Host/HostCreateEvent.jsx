import React, { Component } from 'react';

export default class HostEvent extends Component {
  render() {
    return (
      <div>
        <h1>Host Event</h1>
        <h2>Event Name</h2>
        <input type="text" />
        <h2>Date</h2>
        <input type="text" />
        <h2>Time</h2>
        <input type="text" />
        <h2>Address</h2>
        <input type="text" />
        <h2>Price</h2>
        <input type="text" />
        <h2>Submit</h2>
        <input type="submit" />
      </div>
    );
  }
}
