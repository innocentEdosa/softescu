import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>this is the softesue application</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('react-root'),
);
