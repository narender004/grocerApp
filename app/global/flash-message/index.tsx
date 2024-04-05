/**
 * Flash Message
 * @format
 */

import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RNFlashMessage, { showMessage } from 'react-native-flash-message';

const FlashMessage = () => {
  const insets = useSafeAreaInsets();
  return <RNFlashMessage statusBarHeight={insets.top} />;
};

export { FlashMessage, showMessage };
