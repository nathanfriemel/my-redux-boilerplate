import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ConfigureStore from '../store/configure_store';
import App from './app';
// import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
// import DiffMonitor from 'redux-devtools-diff-monitor';

const store = ConfigureStore();

export default class Root extends Component {
  render () {
    return (
      <div>
        <Provider store={store}>
          {() => <App />}
        </Provider>
        {/*<DebugPanel top right bottom>
          <DevTools store={store} monitor={DiffMonitor} />
        </DebugPanel>*/}
      </div>
    );
  }
}