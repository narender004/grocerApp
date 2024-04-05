/**
 * Search Types
 * @format
 */

import { MainScreenProps, Routes } from '@app/navigator';

export type SearchScreenParams = undefined;
export type SearchViewProps = MainScreenProps<Routes.SearchScreen>;

export type SearchViewState = {
  loading: boolean;
  searchedItems: any;
  searchText: string;
};
