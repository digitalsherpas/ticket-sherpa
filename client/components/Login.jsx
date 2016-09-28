import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div>
      <button onClick={(this.props.loginHandler.bind(this))} />
      <form onSubmit={this.props.loginHandler}>
        Username: <input type="text" /> <br/>
        Password: <input type="password" />
      </form>
      </div>
    );
  }
}