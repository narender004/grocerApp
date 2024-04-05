/**
 * Root Reducer
 * combine all reducers to create root reducer
 * @format
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { commonReducer, logout } from '@app/modules/common';
import { homeReducer } from '@app/modules/home';
import { productReducer } from '@app/modules/product';
import { cartReducer } from '@app/modules/cart';
import { addressReducer } from '@app/modules/user-address';
import { orderReducer } from '@app/modules/my-order';
import { categoryReducer } from '@app/modules/categories';
import { profileReducer } from '@app/modules/my-profile';

/*-----[ persist configurations ]------*/
const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  blacklist: ['commonReducer'],
};
const commonPersistConfig = {
  key: 'commonReducer',
  storage: AsyncStorage,
  blacklist: ['activeSection', 'loaders'],
};

const appReducer = combineReducers({
  commonReducer: persistReducer(commonPersistConfig, commonReducer),
  homeReducer,
  productReducer,
  cartReducer,
  addressReducer,
  orderReducer,
  categoryReducer,
  profileReducer,
});

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === logout.type) {
    const initialState = appReducer(undefined, { type: 'RESET_INIT_STATE' });
    const newState = {
      ...initialState,
      commonReducer: state?.commonReducer || {},
    };
    return appReducer(newState, action);
  }

  return appReducer(state, action);
};

const persistRootReducer = persistReducer(rootPersistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export { persistRootReducer };
