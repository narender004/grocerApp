/**
 * Styles
 * @format
 */

import { ScaledSheet, Colors, Typography } from '@app/styles';

export const styles = ScaledSheet.create({
  container: {
    width: '150@ms',
    backgroundColor: Colors.primary.brand,
    borderRadius: '20@ms',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '2@ms',
    paddingHorizontal: '5@ms',
    paddingLeft: '10@ms',
    marginTop: '10@ms',
  },
  qtyLabelStyle: {
    color: Colors.neutral.white,
    fontFamily: Typography.fonts.bold,
  },
  iconStyle: {
    color: Colors.neutral.white,
    fontSize: '22@ms',
  },
});
