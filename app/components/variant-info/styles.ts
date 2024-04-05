/**
 * Styles
 * @format
 */

import { ScaledSheet, Colors, Typography } from '@app/styles';

export const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sizeStyle: {
    fontSize: '14@ms',
    fontFamily: Typography.fonts.bold,
    color: Colors.textColor.onSecondary,
  },
  colorBoxStyle: {
    width: '15@ms',
    height: '15@ms',
    borderRadius: '7.5@ms',
    marginRight: '5@ms',
    borderWidth: 0.5,
    borderColor: Colors.neutral.s200,
  },
});
