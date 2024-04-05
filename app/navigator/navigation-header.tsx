/**
 * Navigation Header
 * @format
 */

import React from 'react';

import { Header } from '@app/components';
import { HeaderProps } from './types';

type ParamsType =
  | (object & { headerTitle?: string; centerLogoShown?: boolean })
  | undefined;

const NavigationHeader = (props: HeaderProps) => {
  const { options, route, navigation, back } = props;
  const params: ParamsType = route.params as any;

  const title =
    params?.headerTitle !== undefined
      ? params.headerTitle
      : options.title !== undefined
      ? options.title
      : '';

  const centerLogoShown = params?.centerLogoShown !== false;

  const canAccessDrawer = !!(navigation as any).openDrawer;
  const canGoBack = !!back;

  return (
    <Header
      title={title}
      canGoBack={canGoBack}
      canAccessDrawer={canAccessDrawer}
      centerLogoShown={centerLogoShown}
      cartShown
    />
  );
};

export { NavigationHeader };
