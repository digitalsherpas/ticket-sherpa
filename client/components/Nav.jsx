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
          <nav className="header__navigation">
            <ul className="header__nav">
              <li className="header__nav-item">Hello,&nbsp;{this.props.username}!</li>
              <li className="header__nav-item">
                <div className="dropdown">
                  <Link to="/account">
                    <button className="dropbtn">My Account</button>
                  </Link>
                  <div className="dropdown-content">
                    <Link to="/tickets">My Tickets</Link>
                    <Link to="/hostcreateevent">My Events</Link>
                    <Link to="/hostevents">Create New Event</Link>
                  </div>
                </div>
              </li>
              <li className="header__nav-item">
                <Link onClick={this.handleSubmit} to="/">Log Out</Link>
              </li>
            </ul>
          </nav>
      );
    } else {
      return (
          <nav className="header__navigation">
            <ul className="header__nav">
              <li className="header__nav-item"><Link to="/login">Login</Link></li>
              <li className="header__nav-item"><Link to="/signup">Signup</Link></li>
            </ul>
          </nav>
      );
    }
  }
}
