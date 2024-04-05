/**
 * Navigator: Main Section
 * @format
 */

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { MainStackParamsList } from './types';
import { Routes } from './constants';
import { NavigationHeader } from './navigation-header';
import { BottomTabsSection } from './bottom-tabs';

// Screens
import { DrawerContent } from '@app/modules/drawer';
import { SearchScreen } from '@app/modules/search';
import {
  CartScreen,
  PaymentScreen,
  OrderSuccessScreen,
} from '@app/modules/cart';
import {
  AddressListScreen,
  AddEditAddressScreen,
} from '@app/modules/user-address';
import { ProductListScreen, ProductDetailScreen } from '@app/modules/product';

// Navigator instance
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<MainStackParamsList>();

function DrawerSection() {
  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerContent />}
      screenOptions={{ headerShown: false, swipeEnabled: false }}
    >
      <Drawer.Screen name="drawer" component={BottomTabsSection} />
    </Drawer.Navigator>
  );
}

function MainSection() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        header: (props) => <NavigationHeader {...props} />,
        ...TransitionPresets.FadeFromBottomAndroid,
      }}
    >
      <Stack.Screen name={Routes.MainScreen} component={DrawerSection} />
      <Stack.Screen
        name={Routes.SearchScreen}
        options={{ ...TransitionPresets.FadeFromBottomAndroid }}
        component={SearchScreen}
      />
      <Stack.Screen name={Routes.CartScreen} component={CartScreen} />
      <Stack.Screen name={Routes.PaymentScreen} component={PaymentScreen} />
      <Stack.Screen
        name={Routes.OrderSuccessScreen}
        component={OrderSuccessScreen}
      />
      <Stack.Screen
        name={Routes.AddressListScreen}
        component={AddressListScreen}
      />
      <Stack.Screen
        name={Routes.AddEditAddressScreen}
        component={AddEditAddressScreen}
      />
      <Stack.Screen
        name={Routes.ProductListScreen}
        component={ProductListScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name={Routes.ProductDetailScreen}
        component={ProductDetailScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

export { MainSection };
