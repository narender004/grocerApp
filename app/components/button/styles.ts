/**
 * Button Styles
 * @format
 */

import { ScaledSheet, Colors, Outlines, Typography } from '@app/styles';

export const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '60@ms',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Outlines.borderRadius.base,
    overflow: 'hidden',
    backgroundColor: Colors.secondary.brand,
    elevation: 10,
  },
  titleStyle: {
    color: Colors.textColor.onSecondary,
    fontSize: '18@ms',
    fontFamily: Typography.fonts.bold,
  },
  disableStyle: {
    opacity: 0.5,
  },
  primaryBackground: {
    backgroundColor: Colors.primary.brand,
  },
  primaryTitleStyle: {
    color: Colors.textColor.onPrimary,
  },
});
