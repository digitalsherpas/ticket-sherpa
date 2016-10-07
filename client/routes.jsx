import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/App.jsx';
import Home from './components/Home/Home.jsx';
import HostHome from './components/Host/HostHome.jsx';
import HostEventsContainer from './containers/HostEventsContainer.js';
import HostCreateEventContainer from './containers/HostCreateEventContainer.js';
import EventsListContainer from './containers/EventsListContainer.js';
import EventDetailsContainer from './containers/EventDetailsContainer.js';
import HostEventDetailsContainer from './containers/HostEventDetailsContainer.js';
import LoginContainer from './containers/LoginContainer.js';
import BuyEventContainer from './containers/BuyEventContainer.js';
import SignUpContainer from './containers/SignUpContainer.js';
import HostVerifyContainer from './containers/HostVerifyContainer.js';
import HostTicketsContainer from './containers/HostTicketsContainer.js';
import HostMarketplaceContainer from './containers/HostMarketplaceContainer.js';

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.requireAuth = this.requireAuth.bind(this);
  }

  requireAuth(nextState, replace) {
    if (!this.props.auth) {
      replace({
        pathname: '/login',
      })
    }
  }

  render() {
    return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/events" component={EventsListContainer}/>
        <Route path="/events/:eventName" component={EventDetailsContainer}/>
        <Route path="/buyevent/:eventName" component={BuyEventContainer} onEnter={this.requireAuth}/>

        <Route path="/host" component={HostHome} onEnter={this.requireAuth}/>
        <Route path="/hostevents" component={HostEventsContainer} onEnter={this.requireAuth}/>
        <Route path="/hostcreateevent" component={HostCreateEventContainer} onEnter={this.requireAuth}/>
        <Route path="/tickets" component={HostTicketsContainer} onEnter={this.requireAuth}/>
        <Route path="/marketplace" component={HostMarketplaceContainer} />
        <Route path="/hostEvents/:eventName" component={HostEventDetailsContainer} onEnter={this.requireAuth}/>

        <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignUpContainer} />
        <Route path="/verify" component={HostVerifyContainer} />
      </Route>
    </Router>
  )
  }
}
