import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import HostHome from './components/HostHome.jsx';
import HostEventsContainer from './containers/hostEventsContainer';
import EventsListContainer from './containers/EventsListContainer';
import EventDetailsContainer from './containers/EventDetailsContainer';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/events" component={EventsListContainer} />
      <Route path="/details/:eventName" component={EventDetailsContainer} />

      <Route path="/host">
        <IndexRoute component={HostHome} />
        <Route path="/hostevents" component={HostEventsContainer} />
      </Route>
    </Route>
  </Router>
);

export default routes;
