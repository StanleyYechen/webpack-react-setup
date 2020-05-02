import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root'),
);
// enable react-hot-loader
module.hot && module.hot.accept();
