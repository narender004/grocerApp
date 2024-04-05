/**
 * Navigator: Auth Section
 * @format
 */

import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { Routes } from './constants';
import { AuthStackParamsList } from './types';

// Screens
import {
  SignupScreen,
  ForgotPasswordScreen,
  LoginWithOtpScreen,
  VerificationScreen,
} from '@app/modules/auth';

// Navigator instance
const Stack = createStackNavigator<AuthStackParamsList>();

function AuthSection() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.FadeFromBottomAndroid,
      }}
    >
      <Stack.Screen
        name={Routes.LoginWithOtpScreen}
        component={LoginWithOtpScreen}
      />
      <Stack.Screen
        name={Routes.VerificationScreen}
        component={VerificationScreen}
      />
      <Stack.Screen name={Routes.SignupScreen} component={SignupScreen} />
      <Stack.Screen
        name={Routes.ForgotPasswordScreen}
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
}

export { AuthSection };
