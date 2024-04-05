/**
 * Address Sagas
 * @format
 */

import { takeLatest, all, call, put } from 'redux-saga/effects';

import { showMessage } from '@app/global';
import { NavigationService } from '@app/utils';
import { strings } from '@app/strings';
import { createLoader } from '@app/modules/common';
import { request, endpoints } from '@app/api';
import { getAddresses, setAddresses, addAddress, updateAddress } from './slice';

function* getAddressesSaga(): any {
  try {
    const addresses = yield call(request.get, endpoints.get_addresses);
    yield put(setAddresses(addresses));
  } catch (error) {
    console.log('[Error: getAddressesSaga]', error);
  }
}

function* addAddressSaga({ payload }: ReturnType<typeof addAddress>): any {
  const loader = createLoader();
  try {
    yield put(loader.present());
    yield call(request.post, endpoints.add_address, payload);
    yield call(getAddressesSaga);
    yield call(NavigationService.goBack);
    showMessage({
      message: strings.messages.address_added,
      type: 'success',
    });
  } catch (error) {
    console.log('[Error: addAddressSaga]', error);
    showMessage({
      message: (error as any).message,
      type: 'danger',
    });
  } finally {
    yield put(loader.dismiss());
  }
}

function* updateAddressSaga({
  payload,
}: ReturnType<typeof updateAddress>): any {
  try {
    yield call(request.put, endpoints.update_address, payload);
    yield call(getAddressesSaga);
    yield call(NavigationService.goBack);
    showMessage({
      message: strings.messages.address_updated,
      type: 'success',
    });
  } catch (error) {
    console.log('[Error: updateAddressSaga]', error);
  }
}

function* addressSagas() {
  yield all([
    takeLatest(getAddresses, getAddressesSaga),
    takeLatest(addAddress, addAddressSaga),
    takeLatest(updateAddress, updateAddressSaga),
  ]);
}

export { addressSagas };
