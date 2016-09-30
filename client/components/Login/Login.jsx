import React, { Component } from 'react';

// create a React Component to search through passed down events
export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <h4>Username</h4>
        <input id="username" type="text" />
        <h4>Password</h4>
        <input id="password" type="password" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
