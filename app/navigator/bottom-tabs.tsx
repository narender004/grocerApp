/**
 * Navigator: Bottom Tabs Section
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { strings } from '@app/strings';
import { Routes } from './constants';
import { BottomTabParamsList } from './types';
import { Icon, TouchableItem, Label } from '@app/components';
import { Colors } from '@app/styles';
import { styles } from './styles';

// Screens
import { HomeStack } from './home-stack';
import { OrderStack } from './order-stack';
import { ProfileStack } from './profile-stack';
import { CategoryScreen } from '@app/modules/categories';
import { HelpScreen } from '@app/modules/help';

// Tab bar background
const TabBarBackground = () => {
  return <View style={styles.tabBarBackgroundStyle} />;
};

const getTabIcon = ({ color }: { color: string }, iconName: string) => {
  return (
    <Icon
      type="MaterialIcons"
      name={iconName}
      color={color}
      style={styles.iconStyle}
    />
  );
};

const getTabLabel = ({ color }: { color: string }, tabName: string) => {
  return <Label style={[styles.tabBarLabelStyle, { color }]}>{tabName}</Label>;
};

// Navigator instance
const BottomTab = createBottomTabNavigator<BottomTabParamsList>();

function BottomTabsSection() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: TabBarBackground,
        tabBarInactiveTintColor: Colors.applyOpacity(Colors.neutral.white, 0.7),
        tabBarActiveTintColor: Colors.neutral.white,
        tabBarButton: (params) => (
          <TouchableItem
            {...params}
            pressColor={Colors.applyOpacity(Colors.neutral.white, 0.2)}
          />
        ),
        tabBarHideOnKeyboard: true,
      }}
    >
      <BottomTab.Screen
        options={{
          tabBarIcon: (params) => getTabIcon(params, 'home-filled'),
          tabBarLabel: (params) => getTabLabel(params, strings.tabs.home),
        }}
        name={Routes.HomeTab}
        component={HomeStack}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: (params) => getTabIcon(params, 'category'),
          tabBarLabel: (params) => getTabLabel(params, strings.tabs.categories),
        }}
        name={Routes.CategoriesTab}
        component={CategoryScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: (params) => getTabIcon(params, 'storefront'),
          tabBarLabel: (params) => getTabLabel(params, strings.tabs.order),
        }}
        name={Routes.OrderTab}
        component={OrderStack}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: (params) => getTabIcon(params, 'person-outline'),
          tabBarLabel: (params) => getTabLabel(params, strings.tabs.profile),
        }}
        name={Routes.ProfileTab}
        component={ProfileStack}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: (params) => getTabIcon(params, 'help-outline'),
          tabBarLabel: (params) => getTabLabel(params, strings.tabs.help),
        }}
        name={Routes.HelpTab}
        component={HelpScreen}
      />
    </BottomTab.Navigator>
  );
}

export { BottomTabsSection };
