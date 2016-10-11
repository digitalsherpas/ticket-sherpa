import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logOut();
  }

  render() {
    if (this.props.auth) {
      return (
        <nav className="navBar">
          <ul className="header__nav">
            <li className="header__nav-item"><Link to="/host">My Account</Link></li>
            <li className="header__nav-item"><Link onClick={this.handleSubmit} to="/">Log Out</Link></li>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav className="navBar">
          <ul className="header__nav">
            <li className="header__nav-item"><Link to="/login">Login</Link></li>
            <li className="header__nav-item"><Link to="/signup">Signup</Link></li>
          </ul>
        </nav>
      );
    }
  }
}
