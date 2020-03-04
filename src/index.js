import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';


import './languages/i18n';
import App from 'container/App';
import store from 'store';
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

makeServer();

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('react-root'),
);
