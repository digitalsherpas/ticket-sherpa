import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';

import rootReducer from './reducers/indexReducer';

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ), autoRehydrate());

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
