/**
 * Styles
 * @format
 */

import { ScaledSheet, Colors, Outlines, Typography } from '@app/styles';

export const styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: Outlines.borderRadius.base,
    overflow: 'hidden',
    backgroundColor: Colors.secondary.brand,
    elevation: 2,
  },
  content: {
    padding: '10@ms',
    paddingHorizontal: '15@ms',
  },
  selectedContainer: {
    borderWidth: 2,
    borderColor: Colors.primary.brand,
  },
  nameStyle: {
    fontFamily: Typography.fonts.bold,
    marginBottom: '8@ms',
  },
  labelStyle: {},
  buttonStyle: {
    borderColor: Colors.primary.brand,
    borderWidth: 1,
    borderRadius: '5@ms',
    overflow: 'hidden',
    width: '100@ms',
    height: '32@ms',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '8@ms',
    right: '8@ms',
  },
  deliverButtonStyle: {
    width: 'auto',
    backgroundColor: Colors.primary.brand,
    paddingVertical: '5@ms',
    marginHorizontal: '10@ms',
    marginBottom: '5@ms',
    borderRadius: '10@ms',
    overflow: 'hidden',
  },
  buttonLabelStyle: {
    color: Colors.primary.brand,
    fontFamily: Typography.fonts.semiBold,
    marginTop: '-1@ms',
  },
  deliverLabelStyle: {
    color: Colors.textColor.onPrimary,
    fontFamily: Typography.fonts.semiBold,
    textAlign: 'center',
  },
});
