import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HostHome extends Component {
  render() {
    return (
      <div className="content__container">
        <h2>Host</h2>
        <ul>
          <li><Link to="/tickets">My Bought Tickets</Link></li>
          <hr></hr>
          <li><Link to="/hostcreateevent">Create Event</Link></li>
          <li><Link to="/hostevents">My Created Events</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
