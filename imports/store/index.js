import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger'
import rootReducer from './rootReducer';

const logger = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, promise, logger)
);

export default store;