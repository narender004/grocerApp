/**
 * Profile Sagas
 * @format
 */

import { takeLatest, all, call, put } from 'redux-saga/effects';

import { request, endpoints } from '@app/api';
import { createLoader } from '@app/modules/common';
import { showAlert, showMessage } from '@app/global';
import { NavigationService } from '@app/utils';
import { strings } from '@app/strings';
import {
  getMyProfile,
  setMyProfile,
  updateProfile,
  changePassword,
} from './slice';

function* getMyProfileSaga(): any {
  try {
    const profile = yield call(request.get, endpoints.get_my_profile);
    yield put(setMyProfile(profile));
  } catch (error) {
    console.log('[Error: getMyProfileSaga]', error);
  }
}

function* updateProfileSaga({
  payload,
}: ReturnType<typeof updateProfile>): any {
  const loader = createLoader();
  try {
    const { name, email, phone, image, userId, imageId } = payload;

    if (image) {
      yield put(loader.present(strings.messages.uploading_image));

      const form = new FormData();
      form.append('MediumImage', {
        name: image.filename || image.path.split('/').pop(),
        type: image.mime,
        uri: image.path,
      });
      form.append('SourceId', userId);
      form.append('SourceType', 1);
      imageId && form.append('ImageId', imageId);

      if (imageId) {
        yield call(request.put, endpoints.upload_image, form);
      } else {
        yield call(request.post, endpoints.upload_image, form);
      }
    }

    yield put(loader.present());
    yield call(request.put, endpoints.update_profile, {
      userId,
      email,
      mobileNo: phone,
      firstName: name,
    });
    yield call(getMyProfile);
    yield call(showMessage, {
      message: strings.success.profile_updated,
      type: 'success',
    });
    yield call(NavigationService.goBack);
  } catch (error) {
    showAlert('', error.message);
  } finally {
    yield put(loader.dismiss());
  }
}

function* changePasswordSaga({
  payload,
}: ReturnType<typeof changePassword>): any {
  const loader = createLoader();
  try {
    const { oldPassword, newPassword } = payload;

    yield put(loader.present());
    yield call(
      request.put,
      `${endpoints.change_password}?currentPassword=${oldPassword}&newPassword=${newPassword}`,
    );
    yield call(showMessage, {
      message: strings.success.password_updated,
      type: 'success',
    });
    yield call(NavigationService.goBack);
  } catch (error) {
    showAlert('', error.message);
  } finally {
    yield put(loader.dismiss());
  }
}

function* profileSagas() {
  yield all([
    takeLatest(getMyProfile, getMyProfileSaga),
    takeLatest(updateProfile, updateProfileSaga),
    takeLatest(changePassword, changePasswordSaga),
  ]);
}

export { profileSagas };
