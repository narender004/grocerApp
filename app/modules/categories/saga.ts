/**
 * Category Sagas
 * @format
 */

import { takeLatest, all, call, put } from 'redux-saga/effects';

import { request, endpoints } from '@app/api';
import { getCategories, setCategories } from './slice';

function* getCategoriesSaga(): any {
  try {
    const categories = yield call(request.get, endpoints.get_categories);
    yield put(setCategories(categories));
  } catch (error) {
    console.log('[Error: getCategoriesSaga]', error);
  }
}

function* categorySagas() {
  yield all([takeLatest(getCategories, getCategoriesSaga)]);
}

export { categorySagas };
