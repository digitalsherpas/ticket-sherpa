import React, { Component } from 'react';
import HostLogin from './HostLogin.jsx';
import Events from './Events.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>

        <h3>Welcome to Tickether</h3>

        <HostLogin />

        <Events />
      </div>
    );
  }
}