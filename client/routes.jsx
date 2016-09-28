import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import HostHome from './components/HostHome.jsx';
import HostEventsContainer from './containers/hostEventsContainer.js';
import EventsList from './components/EventsList.jsx';
import EventsListContainer from './containers/EventsListContainer.js';
import EventDetails from './components/EventDetails.jsx';


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/events" component={EventsListContainer} />
      <Route path="/details/:eventName" component={EventDetails} />

      <Route path="/host">
        <IndexRoute component={HostHome} />
          <Route path="/hostevents" component={HostEventsContainer} />
      </Route>
    </Route>
  </Router>
)

export default routes