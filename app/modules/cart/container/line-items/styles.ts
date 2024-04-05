/**
 * Styles
 * @format
 */

import { ScaledSheet, Colors, Typography } from '@app/styles';

export const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    padding: '10@ms',
    borderTopWidth: 1.5,
    borderColor: Colors.secondary.brand,
    marginHorizontal: '10@ms',
  },
  imgContainer: {
    borderWidth: 1.5,
    borderColor: Colors.secondary.brand,
    borderRadius: '10@ms',
    padding: '5@ms',
    overflow: 'hidden',
  },
  imgStyle: {
    height: '100@ms',
    width: '100@ms',
  },
  rightContent: {
    flex: 1,
    marginLeft: '10@ms',
  },
  nameStyle: {
    fontSize: '14@ms',
    fontFamily: Typography.fonts.semiBold,
    color: Colors.textColor.onSecondary,
  },
  priceContainerStyle: {
    marginTop: '2@ms',
  },
  addToCartButtonStyle: {
    width: '80@ms',
    paddingHorizontal: '2@ms',
    paddingLeft: '3@ms',
    marginLeft: 'auto',
    marginTop: 'auto',
  },
  qtyStyle: {
    color: Colors.neutral.s700,
    fontFamily: Typography.fonts.semiBold,
    marginTop: '5@ms',
  },
  row: {
    flexDirection: 'row',
  },
  orderIdStyle: {
    marginTop: '5@ms',
    color: Colors.textColor.onSecondary,
    fontFamily: Typography.fonts.semiBold,
    marginLeft: 'auto',
  },
  gray: {
    color: Colors.neutral.s500,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveredIconStyle: {
    width: '20@ms',
    resizeMode: 'contain',
    marginRight: '5@ms',
  },
  statusLabelStyle: {
    color: Colors.success.s400,
    fontFamily: Typography.fonts.semiBold,
  },
  nameoutofstockStyle: {
    fontSize: '15@ms',
    paddingTop:'6@ms',
    fontFamily: Typography.fonts.semiBold,
    color: Colors.textColor.outOfStock,
  },
});
