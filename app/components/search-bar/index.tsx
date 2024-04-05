/**
 * SearchBar Component
 * @format
 */

import React from 'react';
import { Pressable, Text } from 'react-native';

import { NavigationService } from '@app/utils';
import { Routes } from '@app/navigator';
import { strings } from '@app/strings';
import { Icon } from '@app/components';
import { styles } from './styles';

const SearchBar = () => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => NavigationService.navigate(Routes.SearchScreen)}
    >
      <Text style={styles.labelStyle}>{strings.search_product}</Text>
      <Icon type="Ionicons" name="search-outline" style={styles.searchIconStyle} />
    </Pressable>
  );
};

export { SearchBar };
