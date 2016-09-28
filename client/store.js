import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/indexReducer.js';

const store = createStore(
  rootReducer
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;