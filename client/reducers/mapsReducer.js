import { combineReducers } from 'redux';

import {
  // REQUEST_HOST_EVENTS,
} from '../actions/index.jsx';

const mapsList = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const mapsReducer = combineReducers({
  mapsList,
});

export default mapsReducer;
