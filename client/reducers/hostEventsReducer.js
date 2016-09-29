import { combineReducers } from 'redux';
import hostEvents from '../data/hostEvents';

const hostEventsList = (state = hostEvents, action) => {
  switch (action.type) {
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
