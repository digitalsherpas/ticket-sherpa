import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import App from './components/App.jsx';
import reducer from './reducers';

const store = createStore(
  combineReducers({
  ...reducer,
  routing: routerReducer
  })
);

const history = syncHistoryWithStore(browserHistory, store);

// TODO: add route for HostLogin once Kevin figures out server
// <Route path="/HostLogin" component={HostLogin} />
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <Route path="/" component={App}>
    </Route>
    </Router>
  </Provider>, 
  document.getElementById('root')
);