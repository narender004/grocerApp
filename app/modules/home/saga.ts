/**
 * Home Sagas
 * @format
 */

import { takeLatest, all, call, put } from 'redux-saga/effects';

import { request, endpoints } from '@app/api';
import {
  getBanners,
  setBanners,
  getBanners2,
  setBanners2,
  getCategories,
  setCategories,
  getHomeProducts,
  setHomeProducts,
} from './slice';

function* getBannersSaga(): any {
  try {
    const banners = yield call(request.get, endpoints.get_banners);
    yield put(setBanners(banners));
  } catch (error) {
    console.log('[Error: getBannersSaga]', error);
  }
}
function* getBanners2Saga(): any {
  try {
    const banners2 = yield call(request.get, endpoints.get_banners2);
    yield put(setBanners2(banners2));
  } catch (error) {
    console.log('[Error: getBanners2Saga]', error);
  }
}

function* getCategoriesSaga(): any {
  try {
    const categories = yield call(request.get, endpoints.get_categories);
    yield put(setCategories(categories));
  } catch (error) {
    console.log('[Error: getCategoriesSaga]', error);
  }
}

function* getHomeProductsSaga(): any {
  try {
    const products = yield call(request.get, endpoints.get_home_products);
    yield put(setHomeProducts(products));
  } catch (error) {
    console.log('[Error: getHomeProductsSaga]', error);
  }
}

function* homeSagas() {
  yield all([
    takeLatest(getBanners, getBannersSaga),
    takeLatest(getBanners2, getBanners2Saga),
    takeLatest(getCategories, getCategoriesSaga),
    takeLatest(getHomeProducts, getHomeProductsSaga),
  ]);
}

export { homeSagas };
