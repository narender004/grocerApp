/**
 * App Navigator
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { NavigationService } from '@app/utils';
import { selectActiveSection } from '@app/modules/common';
import { Loader, Alert, FlashMessage } from '@app/global';
import { Notification } from '@app/notification-handler';
import { AppBootstrap } from '@app/modules/app-bootstrap';
import { AppSection } from './constants';
import { Colors } from '@app/styles';
import { Props } from './types';

import { AuthSection } from './auth-section';
import { MainSection } from './main-section';

// Get current active section
const getActiveSection = (activeSection: string) => {
  switch (activeSection) {
    case AppSection.AuthSection:
      return AuthSection();
    case AppSection.MainSection:
      return MainSection();
    default:
      return AuthSection();
  }
};

// App Navigator
const Navigator = ({ restored }: Props) => {
  const activeSection = useSelector(selectActiveSection);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
        animated
      />

      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: { ...DefaultTheme.colors, background: Colors.primary.brand },
        }}
        ref={NavigationService.navigationRef}
      >
        <AppBootstrap restored={restored}>
          <>{!!activeSection && getActiveSection(activeSection)}</>
        </AppBootstrap>
      </NavigationContainer>

      <Loader />
      <Alert />
      <FlashMessage />
      <Notification />
    </>
  );
};

export { Navigator };
