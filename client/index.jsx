import { authenticateUser, getUserSession } from './auth/awsCognito.js';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import RoutesContainer from './containers/RoutesContainer.js';
import store, { history } from './store';
import AppProvider from './AppProvider.jsx';

render(
  <AppProvider/>,
  document.getElementById('root')
);
