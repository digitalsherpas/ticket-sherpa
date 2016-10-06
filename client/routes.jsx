import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App.jsx';
import Home from './components/Home/Home.jsx';
import HostHome from './components/HostHome.jsx';
import HostEventsContainer from './containers/HostEventsContainer.js';
import HostCreateEventContainer from './containers/HostCreateEventContainer.js';
import EventsListContainer from './containers/EventsListContainer.js';
import EventDetailsContainer from './containers/EventDetailsContainer.js';
import HostEventDetailsContainer from './containers/HostEventDetailsContainer.js';
import LoginContainer from './containers/LoginContainer.js';
import BuyEventContainer from './containers/BuyEventContainer.js';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/events" component={EventsListContainer} />
      <Route path="/events/:eventName" component={EventDetailsContainer} />
      <Route path="/hostevents/:eventName" component={HostEventDetailsContainer} />
      <Route path="/buyevent/:eventName" component={BuyEventContainer} />


      <Route path="/host" component={HostHome}>
        <Route path="/hostevents" component={HostEventsContainer} />
        <Route path="/hostcreateevent" component={HostCreateEventContainer} />
      </Route>
      <Route path="/hostEvents/:eventName" component={HostEventDetailsContainer} />

      <Route path="/login" component={LoginContainer} />
    </Route>
  </Router>
);

export default routes;
