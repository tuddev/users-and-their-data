import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <Provider store={store}>
    <App title={title} />
  </Provider>,
  document.getElementById('app'),
);

module.hot.accept();

