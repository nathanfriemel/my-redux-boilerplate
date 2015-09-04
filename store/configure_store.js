// Connect middleware, combine reducers if needed, export redux store

import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger'; // this is really hot stuff for debugging
import rootReducer from '../reducers';

import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const finalCreateStore = compose(
  // Enables your middleware:
  applyMiddleware(
    thunkMiddleware,
    // loggerMiddleware
  ),
  // devTools(), // Provides support for DevTools:
  // persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);

export default function ConfigureStore (initialState) {
  return finalCreateStore(rootReducer, initialState);
}
