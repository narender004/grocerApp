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
  flatListContentStyle: {
    flexGrow: 1,
    paddingBottom: '60@ms',
  },
  flexCenterVH: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderImgStyle: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
  orderContainer: {
    backgroundColor: Colors.neutral.white,
    borderColor: Colors.secondary.brand,
    borderWidth: 1,
    padding: '10@ms',
  },
  orderContainerEven: {
    backgroundColor: Colors.applyOpacity(Colors.secondary.brand, 0.5),
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelStyle: {
    color: Colors.textColor.onSecondary,
    marginTop: '8@ms',
    fontSize: '14@ms',
    fontFamily: Typography.fonts.semiBold,
  },
  grayLabel: {
    color: Colors.neutral.s500,
    fontFamily: Typography.fonts.semiBold,
  },
  bold: {
    fontFamily: Typography.fonts.semiBold,
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: '10@ms',
  },
  priceStyle: {
    fontFamily: Typography.fonts.bold,
    fontSize: '18@ms',
    color: Colors.textColor.onSecondary,
  },
  mrpPriceStyle: {
    color: Colors.neutral.s300,
    textDecorationLine: 'line-through',
    marginLeft: '5@ms',
    fontFamily: Typography.fonts.semiBold,
  },
  savingStyle: {
    fontFamily: Typography.fonts.bold,
    color: Colors.success.s400,
    textAlign: 'right',
    marginTop: '5@ms',
  },
  bottomContent: {
    flexDirection: 'row',
    marginTop: '15@ms',
    alignItems: 'center',
  },
  itemImgListStyle: {
    marginRight: '5@ms',
  },
  productImgContainer: {
    borderColor: Colors.secondary.brand,
    borderWidth: 2,
    borderRadius: '5@ms',
    marginHorizontal: '5@ms',
    overflow: 'hidden',
  },
  productImgStyle: {
    height: '50@ms',
    width: '50@ms',
  },
  viewDetailButtonStyle: {
    width: '150@ms',
    elevation: 0,
    height: '45@ms',
    borderRadius: '5@ms',
  },
  viewDetailLabelStyle: {
    fontFamily: Typography.fonts.regular,
  },

  // Order Detail
  titleContainer: {
    padding: '10@ms',
    borderBottomWidth: '1.5@ms',
    borderColor: Colors.secondary.brand,
  },
  titleLabelStyle: {
    fontFamily: Typography.fonts.semiBold,
  },
  couponHeaderLabel: {
    fontSize: '15@ms',
    fontFamily: Typography.fonts.semiBold,
   
  },
  couponDescStyle: {
    flex: 1,
    fontSize: '13@ms',
    color: '#98a697',
    marginRight: '10@ms',
  },
  orderDetailContent: {
    paddingHorizontal: '10@ms',
  },
  rowBetweenSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentDetailContainer: {
    padding: '10@ms',
    paddingHorizontal: '15@ms',
  },
  itemContainer: {
    backgroundColor: Colors.applyOpacity(Colors.secondary.brand, 0.3),
    marginVertical: '10@ms',
  },
  primary: {
    color: Colors.textColor.onSecondary,
    fontSize: '18@ms',
  },
  bottomContentContainer: {
    backgroundColor: Colors.applyOpacity(Colors.secondary.brand, 0.3),
  },
  headingStyle: {
    fontSize: '18@ms',
    fontFamily: Typography.fonts.semiBold,
  },
  addressItemStyle: {
    elevation: 0,
    width: '100%',
    borderRadius: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
});
