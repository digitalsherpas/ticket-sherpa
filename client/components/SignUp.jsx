import React, { Component } from 'react';

export default class SignUp extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.registerUser(this.refs);
  }

  render() {
    return (
      <div className="authentication__container">
        <h2 className="authentication__container-header">Sign Up</h2>
        <form className="authentication__content" ref="commentForm" onSubmit={this.handleSubmit.bind(this)}>
          <h4 className="authentication__content-field">Username</h4>
          <input className="authentication__content-input" type="text" ref="username" placeholder="Username"/>
          <h4 className="authentication__content-field">Password</h4>
          <input className="authentication__content-input" type="password" ref="password" placeholder="Password"/>
          <h4 className="authentication__content-field">Name</h4>
          <input className="authentication__content-input" type="text" ref="name" placeholder="e.g. John Doe"/>
          <h4 className="authentication__content-field">Email</h4>
          <input className="authentication__content-input" type="text" ref="email" placeholder="e.g. email@email.com"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}
