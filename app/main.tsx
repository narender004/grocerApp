/**
 * Grocer
 * Initialize redux store, routes, configs
   _____
  / ____|
 | |  __ _ __ ___   ___ ___ _ __
 | | |_ | '__/ _ \ / __/ _ \ '__|
 | |__| | | | (_) | (_|  __/ |
  \_____|_|  \___/ \___\___|_|

 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import 'proxy-polyfill';
import Bugsnag from '@bugsnag/react-native';

import { configureStore } from '@app/redux';
import { Navigator } from '@app/navigator';

// Start bugsnag
Bugsnag.start();

/*
  Optimize memory usage by using
  native navigation component instead
  of react native view
*/
enableScreens();

const { store, persistor } = configureStore();

const Main = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {(restored) => <Navigator restored={restored} />}
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export { Main };
