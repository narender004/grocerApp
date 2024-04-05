/**
 * Product Sagas
 * @format
 */

import { takeLatest, all, call, put } from 'redux-saga/effects';

import { request, endpoints } from '@app/api';
import {
  getProducts,
  setProducts,
  getProductDetail,
  setProductDetail,
} from './slice';

function* getProductsSaga({ payload }: ReturnType<typeof getProducts>): any {
  try {
    const { categoryId } = payload;

    const products = yield call(
      request.post,
      endpoints.get_products_by_filter,
      {
        categoryId,
      },
    );
    yield put(setProducts(products));
  } catch (error) {
    console.log('[Error: getProductsSaga]', error);
  }
}

function* getProductDetailSaga({
  payload,
}: ReturnType<typeof getProductDetail>): any {
  try {
    const { productId } = payload;

    const detail = yield call(
      request.get,
      endpoints.get_product_detail + productId,
    );
    yield put(setProductDetail(detail));
  } catch (error) {
    console.log('[Error: getProductDetailSaga]', error);
  }
}

function* productSagas() {
  yield all([
    takeLatest(getProductDetail, getProductDetailSaga),
    takeLatest(getProducts, getProductsSaga),
  ]);
}

export { productSagas };
