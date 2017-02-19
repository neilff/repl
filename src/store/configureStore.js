import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import queryMiddleware from './middleware/queryMiddleware';
import rootReducer from '../reducers';

const configureStore = (initialState = {}) => {
  const middleware = [queryMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  const store = compose(
    applyMiddleware(...middleware),
  )(createStore)(rootReducer, initialState);

  return store;
}

export default configureStore;