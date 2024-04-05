/**
 * Header Styles
 * @format
 */

import { ScaledSheet, Colors, Typography, Outlines } from '@app/styles';

export const styles = ScaledSheet.create({
  container: {
    width: '100%',
  },
  safeAreaStyle: {
    zIndex: 100,
    ...Outlines.shadow.base,
    elevation: 8,
    borderBottomWidth: 0.1,
    backgroundColor: Colors.primary.brand,
  },
  content: {
    height: '50@ms',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5@ms',
  },
  backIconStyle: {
    fontSize: '23@ms',
    color: Colors.neutral.white,
  },
  titleStyle: {
    fontFamily: Typography.fonts.semiBold,
    fontSize: '21@ms',
    color: Colors.neutral.white,
    position: 'absolute',
    right: '50@ms',
    left: '45@ms',
    textAlign: 'center',
  },
  drawerButtonStyle: {},
  drawerIconStyle: {
    fontSize: '32@ms',
    color: Colors.neutral.white,
  },
  cartButtonStyle: {
    marginLeft: 'auto',
    borderRadius: '5@ms',
  },
  cartIconStyle: {
    fontSize: '28@ms',
    color: Colors.neutral.white,
  },
  logoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  logoStyle: {
    flex: 1,
    height: '30@ms',
    resizeMode: 'contain',
  },
  cartBadgeStyle: {
    position: 'absolute',
    zIndex: 10,
    top: 1,
    right: 1,
    backgroundColor: '#E73131',
    width: '22@ms',
    height: '22@ms',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '11@ms',
    overflow: 'hidden',
  },
  carCountStyle: {
    color: Colors.neutral.white,
    fontFamily: Typography.fonts.semiBold,
    fontSize: '12@ms',
  },
});
