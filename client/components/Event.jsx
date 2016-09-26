import React, { Component } from 'react';

export default class Event extends Component {
  render() {
    // pass props or does redux handle this differently
    return (
      
      <div>
        <h4>Event Name</h4>
        <p>Date</p>
        <p>Time</p>
        <p>Address</p>
        <p>Price</p>
      </div>
    );
  }
}