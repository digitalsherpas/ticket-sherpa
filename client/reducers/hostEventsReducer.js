import { combineReducers } from 'redux';
import hostEvents from '../data/hostEvents';

const hostEventsList = (state = hostEvents, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const hostEventsReducer = combineReducers({
  hostEventsList,
});

export default hostEventsReducer;
