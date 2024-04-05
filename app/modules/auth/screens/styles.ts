/**
 * Auth styles
 * @format
 */

import { StyleSheet } from 'react-native';

import { ScaledSheet, Colors, Sizing, Typography } from '@app/styles';
import { fonts } from '@app/styles/typography';

export const styles = ScaledSheet.create({
  // Auth container styles
  fillGradient: {
    width: Sizing.screen.width,
    height: Sizing.screen.height,
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
  },
  flexGrow1: {
    flexGrow: 1,
  },
  authBgContainer: {
    width: '100%',
    alignItems: 'center',
  },
  authBgStyle: {
    width: '100%',
    height: '70%',
    maxWidth: 500,
    resizeMode: 'cover',
  },
  logoStyle: {
    height: '50@ms',
    width: '65@ms',
    resizeMode: 'stretch',
    position: 'absolute',
    top: '50%',
  },
  appNameStyle: {
    color: Colors.textColor.onPrimary,
    textDecorationLine: 'underline',
    fontFamily: fonts.bold,
    fontSize: '22@ms',
    textAlign: 'center',
    position: 'absolute',
    top: '45%',
    left: 0,
    right: 0,
  },
  headlineStyle: {
    color: Colors.textColor.onPrimary,
    fontFamily: fonts.bold,
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
  },
  contentStyle: {
    backgroundColor: Colors.neutral.white,
    marginTop: 'auto',
    borderTopLeftRadius: '10@ms',
    borderTopRightRadius: '10@ms',
  },

  // Login Styles
  contentContainer: {
    flex: 1,
    padding: '20@ms',
    marginTop: '15@ms',
  },
  signupContainer: {
    flex: 1,
    padding: '20@ms',
  },
  leftIconStyle: {
    marginRight: '10@ms',
    fontSize: '25@ms',
    color: Colors.primary.brand,
  },
  leftIconErrorStyle: {
    color: Colors.error.light,
  },
  forgotPasswordLabel: {
    alignSelf: 'flex-end',
    color: Colors.primary.extraLight,
    fontSize: '16@ms',
  },
  otpLabelStyle: {
    fontFamily: Typography.fonts.bold,
    fontSize: '16@ms',
    textAlign: 'center',
    marginTop: '15@ms',
    color: Colors.primary.extraLight,
    // color: Colors.neutral.white,
    textDecorationLine: 'underline',
  },
  buttonStyle: {
    borderRadius: '25@ms',
    width: 'auto',
    height: '45@ms',
    paddingHorizontal: '20@ms',
    alignSelf: 'center',
    elevation: 1,
    marginTop: '20@ms',
  },
  buttonTitleStyle: {
    fontSize: '15@ms',
  },
  notHaveAccountLabel: {
    color: Colors.neutral.white,
    textAlign: 'center',
    marginTop: 'auto',
    fontSize: '16@ms',
  },
  linkColor: {
    fontSize: '16@ms',
    color: Colors.primary.extraLight,
    fontWeight: 'bold',
  },
  checkBoxContainer: {
    marginTop: '12@ms',
  },
  iAgreeToLabel: {
    color: Colors.neutral.white,
  },
  captionStyle: {
    color: Colors.neutral.s700,
    fontSize: '12@ms',
  },
  otpBoxContainer: {
    maxWidth: '300@ms',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  otpInputContainer: {
    height: '40@ms',
    width: '40@ms',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5@ms',
    backgroundColor: Colors.primary.extraLight,
  },
  otpInputStyle: {
    color: Colors.primary.s600,
    fontSize: '18@ms',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  verificationCaptionStyle: {
    color: Colors.primary.brand,
    fontSize: '14@ms',
    marginBottom: '30@ms',
  },
  bold: {
    fontFamily: Typography.fonts.semiBold,
  },
  notReceiveCodeTextStyle: {
    marginTop: '30@ms',
    marginBottom: '2@ms',
    fontSize: '12@ms',
    textAlign: 'center',
    color: Colors.primary.brand,
  },
  timerStyle: {
    color: Colors.primary.extraLight,
    fontFamily: Typography.fonts.semiBold,
  },
  resendLabelStyle: {
    color: Colors.primary.extraLight,
    fontFamily: Typography.fonts.semiBold,
    textDecorationLine: 'underline',
  },
});
