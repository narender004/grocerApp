/**
 * Styles
 * @format
 */

import { ScaledSheet, Colors, Typography } from '@app/styles';

export const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
  },
  priceStyle: {
    color: Colors.textColor.onSecondary,
    fontSize: '16@ms',
    fontFamily: Typography.fonts.bold,
  },
  throughLine: {
    color: Colors.neutral.s400,
    textDecorationLine: 'line-through',
    marginLeft: '5@ms',
  },
  discountStyle: {
    marginLeft: 'auto',
    color: Colors.success.s400,
  },
});
