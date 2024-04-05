/**
 * Navigator: Order Stack
 * @format
 */

import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { Routes } from './constants';
import { strings } from '@app/strings';
import { OrderStackParamsList } from './types';
import { NavigationHeader } from './navigation-header';

// Screens
import { MyOrderScreen, OrderDetailScreen } from '@app/modules/my-order';

// Navigator instance
const Stack = createStackNavigator<OrderStackParamsList>();

function OrderStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <NavigationHeader {...props} />,
        ...TransitionPresets.FadeFromBottomAndroid,
      }}
    >
      <Stack.Screen
        options={{ title: strings.header.my_order }}
        name={Routes.MyOrderScreen}
        component={MyOrderScreen}
      />
      <Stack.Screen
        options={{ title: strings.header.order_detail }}
        name={Routes.OrderDetailScreen}
        component={OrderDetailScreen}
      />
    </Stack.Navigator>
  );
}

export { OrderStack };
