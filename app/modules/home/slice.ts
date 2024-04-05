/**
 * Home Slice
 * @format
 */

import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';

interface State {
  banners: Array<any> | null;
  banners2: Array<any> | null;
  categories: Array<any> | null;
  products: Array<any> | null;
}

const initialState: State = {
  banners: null,
  banners2: null,
  categories: null,
  products: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setBanners(state, action: PayloadAction<State['banners']>) {
      state.banners = action.payload;
    },
    setBanners2(state, action: PayloadAction<State['banners2']>) {
      state.banners2 = action.payload;
    },
    setCategories(state, action: PayloadAction<State['categories']>) {
      state.categories = action.payload;
    },
    setHomeProducts(state, action: PayloadAction<State['products']>) {
      state.products = action.payload;
    },
  },
});

// Reducer )--------------------------------------
export const homeReducer = homeSlice.reducer;

// Actions )-------------------------------------
export const { setBanners, setCategories, setHomeProducts,setBanners2 } = homeSlice.actions;

export const getBanners = createAction('HOME/GET_BANNERS');
export const getBanners2 = createAction('HOME/GET_BANNERS2');
export const getCategories = createAction('HOME/GET_CATEGORY');
export const getHomeProducts = createAction('HOME/get_home_products');
