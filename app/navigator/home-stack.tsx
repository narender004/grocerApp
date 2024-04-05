/**
 * Navigator: Home Stack
 * @format
 */

import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { Routes } from './constants';
import { HomeStackParamsList } from './types';
import { NavigationHeader } from './navigation-header';

// Screens
import { HomeScreen } from '@app/modules/home';

// Navigator instance
const Stack = createStackNavigator<HomeStackParamsList>();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <NavigationHeader {...props} />,
        ...TransitionPresets.FadeFromBottomAndroid,
      }}
    >
      <Stack.Screen name={Routes.HomeScreen} component={HomeScreen} />
    </Stack.Navigator>
  );
}

export { HomeStack };
