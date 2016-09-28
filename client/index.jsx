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
import eventsListReducer from './reducers/eventsListReducer';
import eventDetailsReducer from './reducers/eventDetailsReducer';

const store = createStore(
  combineReducers({
  events: eventsListReducer,
  event: eventDetailsReducer,
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
