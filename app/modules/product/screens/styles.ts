/**
 * Styles
 * @format
 */

import { ScaledSheet, Colors, Typography } from '@app/styles';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral.white,
  },
  scrollViewStyle: {
    paddingBottom: '60@ms',
  },
  sliderStyle: {
    borderBottomWidth: 2,
    borderColor: Colors.secondary.brand,
    height: '200@ms',
  },
  content: {
    padding: '10@ms',
    paddingHorizontal: '15@ms',
  },
  nameStyle: {
    fontSize: '16@ms',
    fontFamily: Typography.fonts.semiBold,
    color: Colors.textColor.onSecondary,
  },
  priceContainer: {
    marginTop: '5@ms',
  },
  priceStyle: {
    fontSize: '18@ms',
  },
  quickOverStyle: {
    color: Colors.textColor.onSecondary,
    fontSize: '15@ms',
    fontFamily: Typography.fonts.bold,
    marginTop: '20@ms',
  },
  descStyle: {
    marginTop: '5@ms',
    color: Colors.neutral.s500,
  },
  closeIconContainer: {
    position: 'absolute',
    top: '28@ms',
    zIndex: 50,
  },
  closeIconStyle: {
    color: Colors.neutral.white,
    fontSize: '30@ms',
  },

  // Product List
  productListContentStyle: {
    flexGrow: 1,
    paddingVertical: '10@ms',
    paddingBottom: '60@ms',
  },
  productCardStyle: {
    width: '46%',
    margin: '7@ms',
  },
  emptyPlaceholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderImgStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
  },
  nameoutofstockStyle: {
    fontSize: '22@ms',
    fontFamily: Typography.fonts.semiBold,
    color: Colors.textColor.outOfStock,
  },
});
