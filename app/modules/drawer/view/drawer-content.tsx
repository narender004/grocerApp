/**
 * Drawer Content
 * @format
 */

import React from 'react';
import { Image, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import { NavigationService } from '@app/utils';
import { Routes } from '@app/navigator';
import { strings } from '@app/strings';
import { Label } from '@app/components';
import { logout } from '@app/modules/common';
import { ImageSource } from '@app/common';
import { Colors } from '@app/styles';
import { styles } from './styles';

const DrawerContent = () => {
  const dispatch = useDispatch();

  const renderMenuItem = (name: string, onPress: () => void) => {
    return (
      <TouchableOpacity
        delayPressIn={0}
        activeOpacity={0.5}
        style={styles.itemStyle}
        onPress={onPress}
      >
        <Label style={styles.labelStyle}>{name}</Label>
      </TouchableOpacity>
    );
  };

  return (
    <LinearGradient
      colors={Colors.gradient.drawer}
      useAngle
      angle={200}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeAreaViewStyle}>
        <Image source={ImageSource.logo} style={styles.logoImageStyle} />

        <ScrollView contentContainerStyle={styles.scrollViewStyle}>
          {renderMenuItem(strings.drawer.home, () => {
            NavigationService.navigate(Routes.HomeScreen);
          })}

          {renderMenuItem(strings.drawer.search_product, () => {
            NavigationService.closeDrawer();
            NavigationService.navigate(Routes.SearchScreen);
          })}

          {renderMenuItem(strings.drawer.browse_categories, () => {
            NavigationService.navigate(Routes.CategoriesTab);
          })}

          {renderMenuItem(strings.drawer.my_profile, () => {
            NavigationService.navigate(Routes.ProfileTab);
          })}

          {renderMenuItem(strings.drawer.my_order, () => {
            NavigationService.navigate(Routes.OrderTab);
          })}

          {renderMenuItem(strings.drawer.logout, () => {
            dispatch(logout());
          })}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default DrawerContent;
