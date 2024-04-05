/**
 * Auth Sagas
 * @format
 */

import { takeLatest, put, all, call } from 'redux-saga/effects';

import { api, request, endpoints } from '@app/api';
import { showAlert, showMessage } from '@app/global';
import { NavigationService } from '@app/utils';
import { Routes } from '@app/navigator';
import { strings } from '@app/strings';
import { prepareUserSessionSaga } from '@app/modules/app-bootstrap';
import { createLoader, setAuthToken } from '@app/modules/common';
import {
  tryLogin,
  signup,
  requestResetPassword,
  loginWithPhone,
  verifyCode,
} from './slice';

function* tryLoginSaga({ payload }: ReturnType<typeof tryLogin>): any {
  const loader = createLoader();
  try {
    yield put(loader.present());
    const { username, password } = payload;
    const { token } = yield call(request.post, endpoints.login, {
      loginId: username,
      password,
    });
    yield call(saveTokenSaga, token);
  } catch (error) {
    showAlert(strings.errors.login_failed, error.message);
  } finally {
    yield put(loader.dismiss());
  }
}

function* loginWithPhoneSaga({
  payload,
}: ReturnType<typeof loginWithPhone>): any {
  const loader = createLoader();
  try {
    yield put(loader.present());
    const { phone } = payload;
    yield call(request.get, endpoints.login_with_phone, {
      params: {
        mobileNo: phone,
      },
    });
    yield call(NavigationService.navigate, Routes.VerificationScreen, {
      phone,
    });
  } catch (error) {
    showAlert(strings.errors.login_failed, error.message);
  } finally {
    yield put(loader.dismiss());
  }
}

function* verifyCodeSaga({ payload }: ReturnType<typeof verifyCode>): any {
  const loader = createLoader();
  try {
    yield put(loader.present());
    const { phone, code } = payload;
    const { token } = yield call(request.get, endpoints.verify_otp, {
      params: {
        MobileNO: phone,
        OTPCode: code,
      },
    });
    yield call(saveTokenSaga, token);
  } catch (error) {
    showAlert(strings.errors.login_failed, error.message);
  } finally {
    yield put(loader.dismiss());
  }
}

function* signupSaga({ payload }: ReturnType<typeof signup>): any {
  const loader = createLoader();
  try {
    yield put(loader.present());
    const { name, email, phone, password } = payload;
    const { token } = yield call(request.post, endpoints.register, {
      firstName: name,
      email,
      mobileNo: phone,
      password,
    });
    yield call(showMessage, {
      message: strings.success.account_created,
      type: 'success',
    });
    yield call(saveTokenSaga, token);
  } catch (error) {
    showAlert('', error.message);
  } finally {
    yield put(loader.dismiss());
  }
}

function* requestResetPasswordSaga({
  payload,
}: ReturnType<typeof requestResetPassword>) {
  const loader = createLoader();
  try {
    yield put(loader.present());
    const { username } = payload;
    yield call(request.put, endpoints.reset_password + username);
    yield call(showAlert, '', strings.success.password_reset_link_sent);
    yield call(NavigationService.goBack);
  } catch (error) {
    showAlert('', error.message);
  } finally {
    yield put(loader.dismiss());
  }
}

function* saveTokenSaga(token: string) {
  yield put(setAuthToken(token));
  api.setToken(token);
  yield call(prepareUserSessionSaga);
}

function* authSagas() {
  yield all([
    takeLatest(tryLogin, tryLoginSaga),
    takeLatest(loginWithPhone, loginWithPhoneSaga),
    takeLatest(verifyCode, verifyCodeSaga),
    takeLatest(signup, signupSaga),
    takeLatest(requestResetPassword, requestResetPasswordSaga),
  ]);
}

export { authSagas };
