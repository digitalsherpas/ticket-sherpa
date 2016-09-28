import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HostHome extends Component {
  render() {
    return (
      <div>
        <h1>Host</h1>
        <ul>
          <li><Link to="/hostevents">Host Events</Link></li>      
        </ul>
        <hr></hr>
      </div>
    );
  }
}