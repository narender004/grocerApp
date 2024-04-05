/**
 * Home Selectors
 * @format
 */

import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@app/redux';

const home = (state: RootState) => state.homeReducer;

export const selectBanners = (state: RootState) => home(state).banners;
export const selectBanners2 = (state: RootState) => home(state).banners2;

export const selectHomeCategories = createSelector(home, (data) => {
  const filteredHomeCategory = data.categories
    ?.filter(
      (category) =>
        category?.category?.showOnHomePage &&
        category?.category?.showInHomePageCatRow,
    )
    .sort((a, b) => a.category.title.localeCompare(b.category.title))
    .sort((a, b) => a.category.catRowSeqNo - b.category.catRowSeqNo);

  return filteredHomeCategory;
});

export const selectHomeProducts = createSelector(home, (data) =>
  data.products?.filter(({ products }) => products?.length),
);

export const selectSubCategory = (state: RootState, categoryId: number) =>
  home(state).categories?.filter(
    (category) => category.category.parentCategoryId === categoryId,
  );
