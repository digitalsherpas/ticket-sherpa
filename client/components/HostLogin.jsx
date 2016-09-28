import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HostLogin extends Component {
  render() {
    return (
      <div>
        <h1>Host</h1>
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/hostevent">Host Event</Link></li>
          <li><Link to="/history">History</Link></li>
          <li><Link to="/logout">Logout</Link></li>          
        </ul>
      </div>
    );
  }
}