/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Product Slice
 * @format
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductDetailRequest, ProductListRequest } from './types';

interface State {
  details: any;
  gettingProducts: boolean;
  products: Array<any> | null;
}

const initialState: State = {
  details: null,
  gettingProducts: false,
  products: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProducts(state, action: PayloadAction<ProductListRequest>) {
      state.gettingProducts = true;
      state.products = null;
    },
    setProducts(state, action: PayloadAction<State['products']>) {
      state.products = action.payload;
      state.gettingProducts = false;
    },
    getProductDetail(state, action: PayloadAction<ProductDetailRequest>) {
      state.details = null;
    },
    setProductDetail(state, action: PayloadAction<State['details']>) {
      state.details = action.payload;
    },
  },
});

// Reducer )--------------------------------------
export const productReducer = productSlice.reducer;

// Actions )-------------------------------------
export const { getProductDetail, setProductDetail, getProducts, setProducts } =
  productSlice.actions;
