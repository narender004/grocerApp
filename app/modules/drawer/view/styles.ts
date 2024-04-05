/**
 * Styles
 * @format
 */

import { StyleSheet } from 'react-native';

import { ScaledSheet, Colors } from '@app/styles';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  safeAreaViewStyle: {
    flex: 1,
  },
  scrollViewStyle: {
    flexGrow: 1,
  },
  logoImageStyle: {
    alignSelf: 'center',
    height: '110@ms',
    width: '110@ms',
    marginVertical: '20@ms',
    resizeMode: 'center',
  },
  itemStyle: {
    flexDirection: 'row',
    height: '55@ms',
    width: '100%',
    paddingHorizontal: '15@ms',
    alignItems: 'center',
    marginTop: '1@ms',
  },
  itemGradientStyle: {
    ...StyleSheet.absoluteFillObject,
  },
  labelStyle: {
    color: Colors.textColor.onPrimary,
    fontSize: '20@ms',
  },
});
