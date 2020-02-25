import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './languages/i18n';

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>this is the softescu react application</div>
      {' '}
    </BrowserRouter>
  </Provider>,
  document.getElementById('react-root'),
);
