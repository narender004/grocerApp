/**
 * Category Slice
 * @format
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  categories: Array<any> | null;
  gettingCategories: boolean;
}

const initialState: State = {
  categories: null,
  gettingCategories: false,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getCategories(state) {
      state.gettingCategories = true;
    },
    setCategories(state, action: PayloadAction<State['categories']>) {
      state.categories = action.payload;
      state.gettingCategories = false;
    },
  },
});

// Reducer )--------------------------------------
export const categoryReducer = categorySlice.reducer;

// Actions )-------------------------------------
export const { getCategories, setCategories } = categorySlice.actions;
