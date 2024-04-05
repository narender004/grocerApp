/**
 * Styles
 * @format
 */

import { ScaledSheet, Colors, Typography, Outlines } from '@app/styles';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral.white,
  },
  flatListContentStyle: {
    flexGrow: 1,
  },
  flexCenterVH: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderImgStyle: {
    width: '80%',
    height: '80%',
    resizeMode: 'center',
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '8@ms',
    paddingHorizontal: '20@ms',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLabelStyle: {
    fontSize: '18@ms',
    fontFamily: Typography.fonts.semiBold,
  },
  headerTotalItemStyle: {
    fontSize: '14@ms',
    color: Colors.neutral.s400,
  },
  headerTotalAmountStyle: {
    color: Colors.textColor.onSecondary,
  },
  footerContainer: {
    padding: '10@ms',
    paddingHorizontal: '20@ms',
  },
  listFooterStyle: {
    flexGrow: 1,
    backgroundColor: Colors.applyOpacity(Colors.secondary.brand, 0.7),
    paddingBottom: '70@ms',
  },

  // Payment Screen
  addressHeader: {
    padding: '15@ms',
    marginBottom: '10@ms',
  },
  deliveryLabelStyle: {
    fontFamily: Typography.fonts.semiBold,
    fontSize: '18@ms',
  },
  addAddressButton: {
    backgroundColor: Colors.secondary.brand,
    width: 'auto',
    padding: '10@ms',
    borderRadius: '10@ms',
    borderWidth: 1,
    borderColor: Colors.primary.brand,
    marginTop: '10@ms',
    overflow: 'hidden',
  },
  addAddressLabel: {
    textAlign: 'center',
    color: Colors.primary.brand,
  },
  addressCardStyle: {
    marginTop: '10@ms',
  },

  // Coupon styles
  couponsContainer: {
    backgroundColor: Colors.neutral.white,
    paddingBottom: '10@ms',
  },
  couponHeaderStyle: {
    padding: '5@ms',
  },
  couponHeaderLabel: {
    fontSize: '15@ms',
    fontFamily: Typography.fonts.semiBold,
    paddingLeft: '5@ms',
  },
  leftCouponContainer: {
    flex: 1,
  },
  couponItemContainer: {
    flexDirection: 'row',
    padding: '5@ms',
    paddingHorizontal: '10@ms',
    paddingLeft: '15@ms',
    alignItems: 'center',
  },
  couponStyle: {
    fontWeight: 'bold',
    fontSize: '15@ms',
  },
  couponDescStyle: {
    flex: 1,
    fontSize: '13@ms',
    color: Colors.neutral.s400,
    marginRight: '10@ms',
  },
  couponButtonStyle: {
    width: 'auto',
    height: '30@ms',
    elevation: 0,
    marginLeft: 'auto',
    paddingHorizontal: '20@ms',
    backgroundColor: Colors.transparent.clear,
    borderColor: Colors.primary.brand,
    borderWidth: '1@ms',
  },
  appliedCouponButtonStyle: {
    borderWidth: 0,
    paddingHorizontal: '5@ms',
  },
  couponButtonTitleStyle: {
    fontSize: '13@ms',
    color: Colors.primary.brand,
  },
  couponRemoveIcon: {
    fontSize: '18@ms',
    color: Colors.primary.brand,
  },

  // Order confirm screen
  orderConfirmedImgStyle: {
    width: '300@ms',
    height: '300@ms',
    resizeMode: 'center',
  },
  orderSuccessContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20@ms',
  },
  orderSuccessCaptionStyle: {
    textAlign: 'center',
    fontFamily: Typography.fonts.semiBold,
  },
  statusButtonStyle: {
    marginTop: '50@ms',
    backgroundColor: Colors.transparent.clear,
    elevation: 0,
    width: 'auto',
    paddingHorizontal: '10@ms',
  },
  statusButtonTitleStyle: {
    textDecorationLine: 'underline',
  },
  homeButtonStyle: {
    height: '45@ms',
    ...Outlines.shadow.base,
  },
});
