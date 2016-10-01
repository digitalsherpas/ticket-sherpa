import { combineReducers } from 'redux';
import hostEvents from '../data/hostEvents';

import {
  REQUEST_EVENTS,
} from '../actions/index.jsx';

const hostEventsList = (state = [], action) => {
  switch (action.type) {
    case REQUEST_EVENTS:
      return state.concat(action.payload);
    case 'ADD_EVENT':
      return [...state, {
        eventName: action.eventName,
        date: action.date,
        time: action.time,
        address: action.address,
        price: action.price,
      }];
    default:
      return state;
  }
};

const hostEventsReducer = combineReducers({
  hostEventsList,
});

export default hostEventsReducer;
