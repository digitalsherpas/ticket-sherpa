import React, { Component } from 'react';
import { Link } from 'react-router';
import NavContainer from '../containers/NavContainer.js';
import NavSearchEventsContainer from '../containers/NavSearchEventsContainer.js';

// renders logo and maps props

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="header__logo-container">
            <h2 className="header__logo-text">
              <Link className="header__logo" to={'/'}>Ticket Sherpa</Link>
            </h2>
          </div>
          {(() => {
            if (this.props.location.pathname !== '/') {
              return (<div className="header__search-container">
                <NavSearchEventsContainer/>
              </div>);
            }
            return null;
          })()}
          <NavContainer />
        </div>
        {this.props.children}
      </div>
    );
  }
}
