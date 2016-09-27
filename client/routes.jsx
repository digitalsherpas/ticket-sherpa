import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import history from './index.jsx';
import App from './components/App.jsx';
import EventDetailApp from './components/EventDetailApp.jsx';
import EventsListApp from './components/EventsListApp.jsx';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={EventsListApp} />
      <Route path="details/:eventId" component={EventDetailApp} />
    </Route>
  </Router>
)

export default routes