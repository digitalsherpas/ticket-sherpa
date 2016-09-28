import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import history from './index.jsx';
import App from './components/App.jsx';
import EventsList from './components/EventsList.jsx';
import EventDetails from './components/EventDetails.jsx';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={EventsList} />
      <Route path="details/:eventId" component={EventDetails} />
    </Route>
  </Router>
)

export default routes