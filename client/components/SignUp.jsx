import React, { Component } from 'react';

export default class SignUp extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.registerUser(this.refs);
  }
  render() {
    return (
      <div className="content__container">
        <h3>Sign Up</h3>
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <p>User Name - Ex: Bob</p>
          <input type="text" ref="username" placeholder="User Name"/>
          <p>Password - Ex: password</p>
          <input type="password" ref="password" placeholder="Password"/>
          <p>Name - Ex: John Doe</p>
          <input type="text" ref="name" placeholder="Name"/>
          <p>Email - Ex: email@email.com</p>
          <input type="text" ref="email" placeholder="Email"/>
          <p>Phone Number - Ex: +14702408888</p>
          <input type="text" ref="phonenumber" placeholder="Phone Number"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}
