import * as Babel from 'babel-standalone';
import _ from 'lodash';
import R from 'ramda';
import Immutable from 'immutable';

// Expose libraries for the REPL onto window
global.Babel = Babel;
global.R = R;
global._ = _;
global.Immutable = Immutable;

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

import App from './containers/App';

import './reset.css';
import './index.css';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
