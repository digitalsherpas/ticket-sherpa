import { authenticateUser, getUserSession } from './auth/awsCognito.js';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import RoutesContainer from './containers/RoutesContainer.js';
import store, { history } from './store';

render(
  <Provider store={store}>
    <RoutesContainer />
  </Provider>,
  document.getElementById('root')
);
