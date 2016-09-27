import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';
import routes from './routes.jsx';
import App from './components/App.jsx';
import EventDetailApp from './components/EventDetailApp.jsx';
import EventsListApp from './components/EventsListApp.jsx';
import eventsReducer from './reducers/eventsReducer';
import eventDetailReducer from './reducers/eventDetailReducer';

const store = createStore(
  combineReducers({
  events: eventsReducer,
  event: eventDetailReducer,
  routing: routerReducer
  })
);

export const history = syncHistoryWithStore(browserHistory, store);

// TODO: add route for HostLogin once Kevin figures out server
// <Route path="/HostLogin" component={HostLogin} />
  // <Provider store={store}>
  // </Provider>, 
ReactDOM.render(
    routes,
  document.getElementById('root')
);
