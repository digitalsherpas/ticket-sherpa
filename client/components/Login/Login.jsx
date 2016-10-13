import React, { Component } from 'react';
import MDSpinner from 'react-md-spinner';

// create a React Component to search through passed down events
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'main',
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.authenticateLogin({
      username: this.refs.username.value,
      password: this.refs.password.value,
    });
  }

  render() {
    if (this.props.authenticating === 'sent') {
      return (
        <MDSpinner singleColor="#03a9f4" />
      );
    } else if (this.props.authenticating === 'complete' && this.props.auth) {
      return (
        <div>Logged in</div>
      );
    } else {
      return (
        <div className="authentication__container">
          <h3 className="authentication__container-header">Login</h3>
          <form className="authentication__content" ref="loginForm" onSubmit={this.handleSubmit.bind(this)}>
            <h3 className="authentication__content-field">Username</h3>
            <input className="authentication__content-input" type="text" ref="username" />
            <h3 className="authentication__content-field">Password</h3>
            <input className="authentication__content-input" type="password" ref="password" />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
  }
}
