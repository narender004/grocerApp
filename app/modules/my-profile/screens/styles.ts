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
  profileContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.secondary.brand,
    padding: '15@ms',
  },
  centerAlignContent: {
    justifyContent: 'center',
  },
  profileInfo: {
    marginLeft: '15@ms',
  },
  userImgStyle: {
    width: '90@ms',
    height: '90@ms',
    borderRadius: '50@ms',
    borderWidth: '2@ms',
    borderColor: Colors.primary.brand,
  },
  nameStyle: {
    fontSize: '18@ms',
    fontFamily: Typography.fonts.bold,
    color: Colors.textColor.onSecondary,
  },
  phnStyle: {
    color: Colors.neutral.s500,
    marginTop: '2@ms',
    fontSize: '15@ms',
  },
  phnIconStyle: {
    fontSize: '15@ms',
  },
  editButton: {
    width: '25@ms',
    height: '25@ms',
    backgroundColor: Colors.primary.brand,
    borderRadius: '12.5@ms',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  editButtonBadge: {
    position: 'absolute',
    right: 0,
    top: 0,
    elevation: 5,
    backgroundColor: Colors.neutral.white,
  },
  pencilIconStyle: {
    color: Colors.neutral.white,
    fontSize: '14@ms',
  },
  primaryColor: {
    color: Colors.primary.brand,
  },
  linkContainer: {
    flexDirection: 'row',
    height: '55@ms',
    alignItems: 'center',
    paddingHorizontal: '15@ms',
    borderBottomWidth: '2@ms',
    borderColor: Colors.secondary.brand,
  },
  linkLabelStyle: {
    fontFamily: Typography.fonts.semiBold,
  },
  arrowIconStyle: {
    fontSize: '25@ms',
    marginLeft: 'auto',
    color: Colors.neutral.s700,
  },

  changePasswordContent: {
    paddingHorizontal: '25@ms',
  },
  inputLabelStyle: {
    fontFamily: Typography.fonts.semiBold,
  },
  submitButtonStyle: {
    marginTop: '25@ms',
    elevation: 2,
    height: '50@ms',
  },
});
