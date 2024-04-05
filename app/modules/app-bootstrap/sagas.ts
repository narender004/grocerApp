/**
 * App Bootstrap Sagas
 * @format
 */

import { put, select, takeLatest, call, fork } from 'redux-saga/effects';
import RNSplash from 'rnative-splash';
import messaging from '@react-native-firebase/messaging';

import { api, endpoints, request } from '@app/api';
import { AppSection } from '@app/navigator';
import { changeAppSection, selectAuthToken } from '@app/modules/common';
import { getCart } from '@app/modules/cart';
import { bootstrapApp } from './slice';

function* bootstrapAppSaga(): any {
  try {
    const authToken = yield select(selectAuthToken);

    // Set token in global scope to attach token with api requests
    api.setToken(authToken);

    if (authToken) {
      yield call(prepareUserSessionSaga);
    } else {
      yield put(changeAppSection(AppSection.AuthSection));
    }

    RNSplash.close({
      animationType: RNSplash.animationType.scale,
      duration: 850,
      delay: 1000,
    });
  } catch {
    yield put(changeAppSection(AppSection.AuthSection));
  }
}

function* updateFcmTokenSaga(): any {
  try {
    const fcmToken = yield messaging().getToken();
    yield call(request.put, endpoints.update_fcm_token, {
      fcmToken,
    });
  } catch {}
}

function* prepareUserSessionSaga() {
  yield fork(updateFcmTokenSaga);
  yield put(getCart());
  yield put(changeAppSection(AppSection.MainSection));
}

function* appBootstrapSagas() {
  yield takeLatest(bootstrapApp, bootstrapAppSaga);
}

export { appBootstrapSagas, prepareUserSessionSaga };
