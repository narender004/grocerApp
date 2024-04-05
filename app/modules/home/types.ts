/**
 * Home Types
 * @format
 */

import { HomeScreenProps, Routes } from '@app/navigator';
import { getBanners, getCategories, getHomeProducts,getBanners2 } from './slice';

export type HomeScreenParams = undefined;
export type HomeNavProps = HomeScreenProps<Routes.HomeScreen>;

export type HomeViewProps = HomeNavProps & {
  getBanners: typeof getBanners;
  getBanners2: typeof getBanners2;
  getCategories: typeof getCategories;
  getHomeProducts: typeof getHomeProducts;
  banners: Array<any> | null;
  banners2: Array<any> | null;
  categories: Array<any> | null | undefined;
  products: Array<any> | null | undefined;
};
