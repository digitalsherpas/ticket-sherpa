import React, { Component } from 'react';

// create a React Component to search through passed down events
export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.authenticateLogin({
      username: this.refs.username.value,
      password: this.refs.password.value,
    });
  }

  render() {
    return (
      <form ref="loginForm" onSubmit={this.handleSubmit.bind(this)}>
        <h4>Username</h4>
        <input ref="username" type="text" />
        <h4>Password</h4>
        <input ref="password" type="password" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
