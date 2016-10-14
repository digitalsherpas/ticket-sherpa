import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HostHome extends Component {
  render() {
    return (
      <div className="content__container">
        <h2>My Account</h2>
        <div>
          <p><Link to="/tickets">My Bought Tickets</Link></p>
          <hr></hr>
          <p><Link to="/hostcreateevent">Create Event</Link></p>
          <p><Link to="/hostevents">My Created Events</Link></p>
        </div>
        {this.props.children}
      </div>
    );
  }
}
