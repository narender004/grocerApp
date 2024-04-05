/**
 * Category Selectors
 * @format
 */

import type { RootState } from '@app/redux';

const category = (state: RootState) => state.categoryReducer;

export const selectCategories = (state: RootState) =>
  category(state).categories;

export const selectIsGettingCategories = (state: RootState) =>
  category(state).gettingCategories;
