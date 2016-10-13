import React, { Component } from 'react';

export default class SignUp extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.registerUser(this.refs);
  }

  render() {
    return (
      <div className="authentication__container">
        <h3 className="authentication__container-header">Sign Up</h3>
        <form className="authentication__content" ref="commentForm" onSubmit={this.handleSubmit.bind(this)}>
          <p className="authentication__content-field">Username</p>
          <input className="authentication__content-input" type="text" ref="username" placeholder="Username"/>
          <p className="authentication__content-field">Password</p>
          <input className="authentication__content-input" type="password" ref="password" placeholder="Password"/>
          <p className="authentication__content-field">Name</p>
          <input className="authentication__content-input" type="text" ref="name" placeholder="e.g. John Doe"/>
          <p className="authentication__content-field">Email</p>
          <input className="authentication__content-input" type="text" ref="email" placeholder="e.g. email@email.com"/>
          <p className="authentication__content-field">Phone Number</p>
          <input className="authentication__content-input" type="text" ref="phonenumber" placeholder="e.g. +14702408888"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}
