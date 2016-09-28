import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import history from './index.jsx';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import EventsList from './components/EventsList.jsx';
import EventsListContainer from './containers/EventsListContainer.js';
import EventDetails from './components/EventDetails.jsx';
import HostLogin from './components/HostLogin.jsx';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/events" component={EventsListContainer} />
      <Route path="/details/:eventName" component={EventDetails} />
      <Route path="/host" component={HostLogin} />
    </Route>
  </Router>
)

export default routes