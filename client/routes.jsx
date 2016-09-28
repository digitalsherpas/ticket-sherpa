import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import history from './index.jsx';
import App from './components/App.jsx';
import Home from './components/Home.jsx';

import EventsList from './components/EventsList.jsx';
import EventsListContainer from './containers/EventsListContainer.js';
import EventDetails from './components/EventDetails.jsx';

import HostLogin from './components/HostHome.jsx';

import HostCreateEvent from './components/Host/HostCreatEevent.jsx';
import HostHistory from './components/Host/HostHistory.jsx';
import HostEvents from './components/Host/HostEvents.jsx';
import HostProfile from './components/Host/HostProfile.jsx';

import HostEventsContainer from './containers/hostEventsContainer.js';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/events" component={EventsListContainer} />
      <Route path="/details/:eventName" component={EventDetails} />

      <Route path="/host">
        <IndexRoute component={HostLogin} />
          <Route path="/hostevents" component={HostEventsContainer} />
      </Route>
    </Route>
  </Router>
)

export default routes