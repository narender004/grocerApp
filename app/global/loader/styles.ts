/**
 * Loader Styles
 * @format
 */

import { StyleSheet } from 'react-native';

import { ScaledSheet, Colors, Sizing, Typography } from '@app/styles';

export const styles = ScaledSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: Sizing.screen.height,
    width: Sizing.screen.width,
    elevation: 1000,
    zIndex: 10000,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.applyOpacity(Colors.neutral.s700, 0.6),
  },
  lottieStyle: {
    height: '100@ms',
  },
  messageStyle: {
    color: Colors.textColor.onPrimary,
    fontFamily: Typography.fonts.italic,
    fontSize: '18@ms',
  },
});
