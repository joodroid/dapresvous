import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import Routes from './Routes';
import { Router, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Router Routes={Routes} />,
  document.getElementById('root')
);
