/**
 * Order Sagas
 * @format
 */

import { takeLatest, takeEvery, all, call, put } from 'redux-saga/effects';

import { request, endpoints } from '@app/api';
import { getOrders, setOrders, getOrderDetail, setOrderDetail } from './slice';

function* getMyOrdersSaga(): any {
  try {
    const orders = yield call(request.get, endpoints.get_my_orders);
    yield put(setOrders(orders));
  } catch (error) {
    console.log('[Error: getMyOrdersSaga]', error);
  }
}

function* getOrderDetailSaga({
  payload,
}: ReturnType<typeof getOrderDetail>): any {
  try {
    const { orderId } = payload;
    const order = yield call(request.get, endpoints.get_order_detail + orderId);
    yield put(setOrderDetail(order));
  } catch (error) {
    console.log('[Error: getOrderDetailSaga]', error);
  }
}

function* orderSagas() {
  yield all([
    takeLatest(getOrders, getMyOrdersSaga),
    takeEvery(getOrderDetail, getOrderDetailSaga),
  ]);
}

export { orderSagas };
