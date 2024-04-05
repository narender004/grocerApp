/**
 * Order Slice
 * @format
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  gettingOrders: boolean;
  orders: Array<any> | null;
  orderDetail: any;
}

const initialState: State = {
  gettingOrders: false,
  orders: null,
  orderDetail: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    getOrders(state) {
      state.gettingOrders = true;
    },
    setOrders(state, action: PayloadAction<State['orders']>) {
      state.orders = action.payload;
      state.gettingOrders = false;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getOrderDetail(state, action: PayloadAction<{ orderId: number }>) {
      state.orderDetail = null;
    },
    setOrderDetail(state, action: PayloadAction<State['orderDetail']>) {
      state.orderDetail = action.payload;
    },
  },
});

// Reducer )--------------------------------------
export const orderReducer = orderSlice.reducer;

// Actions )-------------------------------------
export const { getOrders, setOrders, getOrderDetail, setOrderDetail } =
  orderSlice.actions;
