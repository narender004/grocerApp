/**
 * Styles
 * @format
 */

import { ScaledSheet, Colors, Typography } from '@app/styles';

export const styles = ScaledSheet.create({
  container: {
    margin: '5@ms',
    width: '170@ms',
    elevation: 2,
    borderRadius: '10@ms',
    overflow: 'hidden',
    backgroundColor: Colors.neutral.white,
  },
  productImgContainer: {
    height: '140@ms',
    borderBottomWidth: 1,
    borderColor: Colors.secondary.brand,
  },
  productImgStyle: {
    height: '100%',
  },
  content: {
    flex: 1,
    padding: '10@ms',
    paddingTop: '5@ms',
    paddingBottom: 0,
  },
  nameLabelStyle: {
    color: Colors.textColor.onSecondary,
    fontSize: '15@ms',
  },
  priceContainer: {
    marginTop: '2@ms',
  },
  addToCartButtonStyle: {
    marginLeft: 'auto',
    margin: '10@ms',
  },
  nameoutofstockStyle: {
     textAlign: 'left',
     paddingLeft: '10@ms',
    fontSize: '16@ms',
    fontFamily: Typography.fonts.semiBold,
    color: Colors.textColor.outOfStock,
  },
});
