import React, { Component } from 'react';
import { Link } from 'react-router';
import SearchEventsContainer from '../../containers/SearchEventsContainer';
import HomeEventsListContainer from '../../containers/HomeEventsListContainer';
// TODO: add reducer, similar to eventsList
import Events from '../Events/Events.jsx';

export default class Home extends Component {
  render() {
    return (
      <div className="content">
        <div className="home__image-container">
          <div className="home__overlay">
            <h1 className="home__overlay-title">
              Sell Tickets
            </h1>
            <p>
              Manage your events through code. No middleman fees.
            </p>
            <br/>
            <p>
              A decentralized event ticketing platform built on Ethereum.
            </p>
          </div>
          <img className="home__big-image" src={require('../../styles/images/eventbrite_homepage_image.jpg')} />
        </div>
        <div className="event__container">
          <div className="home__search">
            <SearchEventsContainer />
          </div>

          <div className="home__events-title">
            <h2>Events</h2>
          </div>
            <HomeEventsListContainer />
        </div>
      </div>
    );
  }
}
