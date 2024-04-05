/**
 * Set Permission Styles
 * @format
 */

import { StyleSheet } from 'react-native';

import { ScaledSheet, Colors, Outlines, Typography } from '@app/styles';

// Styles
export const styles = ScaledSheet.create({
  container: {
    backgroundColor: Colors.primary.brand,
    width: '100%',
    maxWidth: '340@ms',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    paddingVertical: '40@ms',
    ...Outlines.shadow.base,
    borderRadius: '8@ms',
  },
  titleStyle: {
    color: Colors.neutral.white,
    paddingVertical: '14@ms',
    fontSize: '24@ms',
    fontFamily: Typography.fonts.semiBold,
  },
  messageStyle: {
    color: Colors.neutral.white,
    textAlign: 'center',
    paddingBottom: '14@ms',
    paddingHorizontal: '5@ms',
    fontSize: '14@ms',
  },
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.applyOpacity(Colors.neutral.black, 0.5),
    zIndex: -1,
  },
  buttonStyle: {
    width: '80%',
    height: '55@ms',
    borderRadius: '40@ms',
    marginVertical: '10@ms',
    alignSelf: 'center',
    elevation: 2,
  },
  iconStyle: {
    fontSize: '40@ms',
    color: Colors.neutral.white,
    paddingVertical: '20@ms',
  },
});
