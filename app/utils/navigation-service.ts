/**
 * Navigation Service
 * @format
 */

import React from 'react';
import {
  CommonActions,
  DrawerActions,
  NavigationContainerRef,
} from '@react-navigation/native';

// Navigation container reference
const navigationRef = React.createRef<NavigationContainerRef>();

// Navigate to a route
function navigate(name: string, params?: Object) {
  navigationRef.current?.dispatch(CommonActions.navigate({ name, params }));
}

// Go back from current screen to previous
function goBack() {
  navigationRef.current?.dispatch(CommonActions.goBack());
}

// Open drawer
function openDrawer() {
  navigationRef.current?.dispatch(DrawerActions.openDrawer());
}

function closeDrawer() {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer());
}

export const NavigationService = {
  navigationRef,
  navigate,
  goBack,
  openDrawer,
  closeDrawer,
};
