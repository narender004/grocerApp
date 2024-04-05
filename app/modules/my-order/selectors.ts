/**
 * Order Selectors
 * @format
 */

import type { RootState } from '@app/redux';

const order = (state: RootState) => state.orderReducer;

export const selectIsGettingOrders = (state: RootState) =>
  order(state).gettingOrders;

export const selectOrders = (state: RootState) => order(state).orders;

export const selectOrder = (state: RootState) => order(state).orderDetail;
