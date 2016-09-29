import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import HostHome from './components/HostHome.jsx';
import HostEventsContainer from './containers/hostEventsContainer.js';
import HostCreateEventContainer from './containers/HostCreateEventContainer.js';
import EventsListContainer from './containers/eventsListContainer.js';
import HostEventDetailsContainer from './containers/HostEventDetailsContainer.js';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/events" component={EventsListContainer} />
      <Route path="/host" component={HostHome}>
        <Route path="/hostevents" component={HostEventsContainer} />
        <Route path="/hostcreateevent" component={HostCreateEventContainer} />
      </Route>
      <Route path="/details/:hostEventName" component={HostEventDetailsContainer} />
    </Route>
  </Router>
);

export default routes;
