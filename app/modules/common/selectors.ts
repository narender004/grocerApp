/**
 * Common Selectors
 * @format
 */

import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@app/redux';

const common = (state: RootState) => state.commonReducer;

export const selectActiveSection = (state: RootState) =>
  common(state).activeSection;

export const selectAuthToken = (state: RootState) => common(state).authToken;

export const selectLoader = createSelector(
  common,
  (data) => data.loaders.slice(-1)[0],
);
