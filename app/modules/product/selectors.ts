/**
 * Product Selectors
 * @format
 */

import type { RootState } from '@app/redux';

const product = (state: RootState) => state.productReducer;

export const selectProductDetail = (state: RootState) => product(state).details;

export const selectIsGettingProducts = (state: RootState) =>
  product(state).gettingProducts;

export const selectProducts = (state: RootState) => product(state).products;
