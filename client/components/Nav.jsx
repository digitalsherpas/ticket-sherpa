import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
  render() {
    return (
      <ul className="nav">
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/host">Host</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    );
  }
}
