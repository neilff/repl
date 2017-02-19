import React from 'react';
import ReactDOM from 'react-dom';
import * as Babel from 'babel-standalone';
import _ from 'lodash';
import R from 'ramda';
import Immutable from 'immutable';

// Expose libraries for the REPL onto window
global.Babel = Babel;
global.Immutable = Immutable;
global.R = R;
global.React = React;
global.ReactDOM = ReactDOM;
global._ = _;

import base64 from 'base-64';
import configureStore from './store/configureStore';
import history from './common/history';
import { Provider } from 'react-redux';
import { parse } from 'query-string';

import App from './containers/App';

import './reset.css';
import './index.css';

const initialState = parse(history.location.search);

const store = configureStore({
  code: {
    value: initialState.q ? base64.decode(initialState.q) : '',
  },
});

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'),
);
