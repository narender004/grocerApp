/**
 * Redux Store
 * @format
 */

import { configureStore as reduxConfigureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import { ENV } from '@app/config';
import { persistRootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

/*-----------[ configure store ]------------*/
function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  // New middleware can be added here
  const middleware = [sagaMiddleware];

  const store = reduxConfigureStore({
    reducer: persistRootReducer,
    middleware,
    devTools: ENV === 'development',
  });

  const persistor = persistStore(store);

  // Run sagas
  rootSaga.forEach(sagaMiddleware.run);

  return { store, persistor };
}

export { configureStore };
