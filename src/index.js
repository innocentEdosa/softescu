import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'assets/index.scss';

import './languages/i18n';
import App from 'container/App';
import configureStore, { history } from 'store';
import { ConnectedRouter } from 'connected-react-router';

import {
  faEdit,
  faTrashAlt,
  faBoxOpen,
  faBook,
  faUsers,
  faCartPlus,
  faShoppingCart,
  faCopyright,
} from '@fortawesome/free-solid-svg-icons';
import makeServer from './mirage';

library.add(
  faEdit,
  faTrashAlt,
  faCopyright,
  faBoxOpen,
  faBook,
  faUsers,
  faShoppingCart,
  faCartPlus,
);
const store = configureStore();
makeServer();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react-root'),
);
