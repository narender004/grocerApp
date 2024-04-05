/**
 * Styles
 * @format
 */

import { ScaledSheet, Colors, Typography } from '@app/styles';

export const styles = ScaledSheet.create({
  paymentDetailLabel: {
    fontSize: '18@ms',
    fontFamily: Typography.fonts.semiBold,
    borderBottomWidth: 1,
    borderColor: Colors.secondary.s600,
    paddingBottom: '10@ms',
    marginBottom: '5@ms',
  },
  paymentItem: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: '8@ms',
    borderBottomWidth: 1,
    borderColor: Colors.secondary.s600,
  },
  paymentLabelStyle: {
    fontSize: '16@ms',
  },
  priceStyle: {
    color: Colors.textColor.onSecondary,
  },
  bold: {
    fontFamily: Typography.fonts.semiBold,
  },
  savingLabelStyle: {
    marginLeft: 'auto',
    fontSize: '15@ms',
    color: Colors.success.s400,
    fontFamily: Typography.fonts.bold,
    marginTop: '5@ms',
  },
});
