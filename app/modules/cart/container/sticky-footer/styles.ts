/**
 * Styles
 * @format
 */

import { ScaledSheet, Colors, Typography } from '@app/styles';

export const styles = ScaledSheet.create({
  paymentLabelStyle: {
    fontSize: '16@ms',
  },
  priceStyle: {
    color: Colors.textColor.onSecondary,
  },
  bold: {
    fontFamily: Typography.fonts.semiBold,
  },
  stickyFooter: {
    position: 'absolute',
    bottom: 0,
    height: '65@ms',
    width: '100%',
    backgroundColor: Colors.neutral.white,
    elevation: 10,
    zIndex: 100,
    borderTopLeftRadius: '20@ms',
    borderTopRightRadius: '20@ms',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10@ms',
    paddingHorizontal: '20@ms',
  },
  stickFooterLeftContent: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
  },
  placeOrderButtonStyle: {
    backgroundColor: Colors.secondary.brand,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10@ms',
    borderWidth: 1,
    borderColor: Colors.primary.brand,
    borderRadius: '5@ms',
    height: '40@ms',
  },
  placeOrderLabelStyle: {
    color: Colors.primary.brand,
    fontFamily: Typography.fonts.semiBold,
    marginTop: '-1@ms',
  },
  disabledStyle: {
    opacity: 0.2,
  },
});
