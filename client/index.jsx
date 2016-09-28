import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';
import routes from './routes.jsx';
import App from './components/App.jsx';
import EventsList from './components/EventsList.jsx';
import EventDetails from './components/EventDetails.jsx';

import eventDetailsReducer from './reducers/eventDetailsReducer';
import eventsListReducer from './reducers/eventsListReducer';
import hostEventsReducer from './reducers/hostEventsReducer';


import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const store = createStore(
  combineReducers({
  eventsListReducer,
  event: eventDetailsReducer,
  hostevents: hostEventsReducer,
  routing: routerReducer
  })
);

export const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(  
  <Provider store={store}>
    {routes}
  </Provider>, 
  document.getElementById('root')
);
