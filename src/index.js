import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
// hmr set for dev env
module.hot.accept();
