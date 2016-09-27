import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import App from './components/App.jsx';
import eventsReducer from './reducers/eventsReducer';
import DevTools from './containers/DevTools';

const store = createStore(
  combineReducers({
  events: eventsReducer,
  routing: routerReducer
  })
);

const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  // Whenever a new version of App.js is available
  module.hot.accept('./components/App.jsx', function () {
    // Require the new version and render it instead
    var NextApp = require('./components/App.jsx')
    ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
        <Route path="/" component={NextApp}>
        </Route>
        <DevTools />
        </Router>
      </Provider>, 
      document.getElementById('root')
    );
  });
}

// TODO: add route for HostLogin once Kevin figures out server
// <Route path="/HostLogin" component={HostLogin} />
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <Route path="/" component={App}>
    </Route>
    <DevTools />
    </Router>
  </Provider>, 
  document.getElementById('root')
);
