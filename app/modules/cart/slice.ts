/**
 * Cart Slice
 * @format
 */

import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';

import { UpdateCart, OrderRequest, CouponRequest } from './types';

interface State {
  gettingItems: boolean;
  items: Array<any>;
  deliveryCharge: number;
  coupons: Array<any>;
  appliedCoupon: any;
}

const initialState: State = {
  gettingItems: false,
  items: [],
  coupons: [],
  deliveryCharge: 0,
  appliedCoupon: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCart(state) {
      state.gettingItems = true;
    },
    setCart(state, action: PayloadAction<State['items']>) {
      state.items = action.payload;
      state.gettingItems = false;
    },
    setDeliveryCharge(state, action: PayloadAction<State['deliveryCharge']>) {
      state.deliveryCharge = action.payload;
    },
    setCoupons(state, action: PayloadAction<State['coupons']>) {
      state.coupons = action.payload;
    },
    setAppliedCoupon(state, action: PayloadAction<State['appliedCoupon']>) {
      state.appliedCoupon = action.payload;
    },
    removeAppliedCoupon(state) {
      state.appliedCoupon = null;
    },
  },
});

// Reducer )--------------------------------------
export const cartReducer = cartSlice.reducer;

// Actions )-------------------------------------
export const {
  getCart,
  setCart,
  setDeliveryCharge,
  setCoupons,
  setAppliedCoupon,
  removeAppliedCoupon,
} = cartSlice.actions;

export const updateCart = createAction<UpdateCart>('CART/UPDATE_CART');

export const submitOrder = createAction<OrderRequest>('PAYMENT/SUBMIT_ORDER');

export const getCoupons = createAction('CART/GET_COUPONS');

export const tryCoupon = createAction<CouponRequest>('CART/TRY_COUPON');
