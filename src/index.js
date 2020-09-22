import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App items={'Lorem ipsum dolor sit'.split(' ')} />
  </React.StrictMode>,
  document.getElementById('root'),
);
