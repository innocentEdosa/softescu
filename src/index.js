import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';

import './languages/i18n';
import App from 'container/App';
import store from 'store';

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('react-root'),
);
