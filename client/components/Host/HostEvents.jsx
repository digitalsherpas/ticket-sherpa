import React, { Component } from 'react';
import Event from '../Events/Event.jsx';


export default class HostEvents extends Component {
  render() {
    return (
      <div>
        <h1>Events go here</h1>
        {this.props.myEvents}
      </div>
    );
  }
}
