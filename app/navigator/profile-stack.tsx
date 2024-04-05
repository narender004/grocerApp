/**
 * Navigator: Profile Stack
 * @format
 */

import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { Routes } from './constants';
import { ProfileStackParamsList } from './types';
import { NavigationHeader } from './navigation-header';

// Screens
import {
  MyProfileScreen,
  ChangePasswordScreen,
  UpdateProfileScreen,
} from '@app/modules/my-profile';
import { strings } from '@app/strings';

// Navigator instance
const Stack = createStackNavigator<ProfileStackParamsList>();

function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <NavigationHeader {...props} />,
        ...TransitionPresets.FadeFromBottomAndroid,
      }}
    >
      <Stack.Screen
        options={{ title: strings.header.my_profile }}
        name={Routes.MyProfileScreen}
        component={MyProfileScreen}
      />
      <Stack.Screen
        options={{ title: strings.header.change_password }}
        name={Routes.ChangePasswordScreen}
        component={ChangePasswordScreen}
      />
      <Stack.Screen
        options={{ title: strings.header.update_profile }}
        name={Routes.UpdateProfileScreen}
        component={UpdateProfileScreen}
      />
    </Stack.Navigator>
  );
}

export { ProfileStack };
