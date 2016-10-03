import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HostHome extends Component {
  render() {
    return (
      <div>
        <h2>Host</h2>
        <ul>
          <li><Link to="/hostevents">List of Events</Link></li>    
          <li><Link to="/hostcreateevent">Create Event</Link></li>
        </ul>
        <hr></hr>
        {this.props.children}
      </div>
    );
  }
}
