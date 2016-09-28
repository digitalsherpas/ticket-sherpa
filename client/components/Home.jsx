import React, { Component } from 'react';
import { Link } from 'react-router';

export default class EventsListApp extends Component {
  render () {
    return (
      <div>
        <ul>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/host">Host</Link></li>
        </ul>
      </div>
    );
  }
}