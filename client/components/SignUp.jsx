import React, { Component } from 'react';

export default class SignUp extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.registerUser(this.refs);
  }

  render() {
    return (
      <div className="signup__container">
        <h3 className="signup__container-h2">Sign Up</h3>
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <p>Username</p>
          <input type="text" ref="username" placeholder="Username"/>
          <p>Password</p>
          <input type="password" ref="password" placeholder="Password"/>
          <p>Name</p>
          <input type="text" ref="name" placeholder="e.g. John Doe"/>
          <p>Email</p>
          <input type="text" ref="email" placeholder="email@gmail.com"/>
          <p>Phone Number</p>
          <input type="text" ref="phonenumber" placeholder="e.g. +14702408888"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}
