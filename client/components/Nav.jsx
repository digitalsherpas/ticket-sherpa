import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
  render() {
    return (
      <nav className="navBar">
        <ul className="navLinks">
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/host">Host</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </nav>
    );
  }
}
