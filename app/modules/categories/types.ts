/**
 * Category Types
 * @format
 */

import { BottomTabsScreenProps, Routes } from '@app/navigator';
import { getCategories } from './slice';

export type CategoryScreenParams = undefined;
export type CategoryScreenNavProps =
  BottomTabsScreenProps<Routes.CategoriesTab>;

export type CategoryViewProps = CategoryScreenNavProps & {
  loading: boolean;
  getCategories: typeof getCategories;
  categories: Array<any> | null | undefined;
};

export type CategoryState = {
  activeSections: Array<number>;
};
