import React, { Component } from 'react';
import { Link } from 'react-router';
import SearchEventsContainer from '../../containers/SearchEventsContainer';
import HomeEventsListContainer from '../../containers/HomeEventsListContainer';
// TODO: add reducer, similar to eventsList
import Events from '../Events/Events.jsx';

export default class Nav extends Component {
  render() {
    return (
      <div className="home">
        <h1>Welcome to Ticket Sherpa</h1>
        <h4>Your one stop ticket shop</h4>
        {/* <Events /> */}
        <div className="homeImage">
          <img height="200px" width="200px" />
        </div>

        <div className="homeSearch">
          <SearchEventsContainer />
        </div>

        <HomeEventsListContainer />
      </div>
    );
  }
}
