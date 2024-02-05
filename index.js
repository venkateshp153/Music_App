/**
 * @format
 * OzddHV6kV7tKuUjW
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
