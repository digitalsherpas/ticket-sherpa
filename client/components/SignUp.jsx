import React, { Component } from 'react';

export default class SignUp extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.registerUser(this.refs);
  }
  render() {
    return (
      <div>
        <h2>Sign Up</h2>
      <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
        <h3>User Name - Ex: Bob</h3>
        <input type="text" ref="username" placeholder="User Name"/>
        <h3>Password - Ex: password</h3>
        <input type="text" ref="password" placeholder="Password"/>
        <h3>Name - Ex: John Doe</h3>
        <input type="text" ref="name" placeholder="Name"/>
        <h3>Email - Ex: email@email.com</h3>
        <input type="text" ref="email" placeholder="Email"/>
        <h3>Phone Number - Ex: +14702408888</h3>
        <input type="text" ref="phonenumber" placeholder="Phone Number"/>
        <input type="submit"/>
      </form>
      </div>
    );
  }
}
