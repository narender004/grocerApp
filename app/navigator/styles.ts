/**
 * Navigator styles
 * @format
 */

import { ScaledSheet, Typography, Colors } from '@app/styles';

export const styles = ScaledSheet.create({
  tabBarStyle: {
    position: 'absolute',
    borderTopWidth: 0,
    height: '57@ms',
  },
  tabBarBackgroundStyle: {
    backgroundColor: Colors.primary.brand,
    height: '100%',
    width: '100%',
    borderTopLeftRadius: '15@ms',
    borderTopRightRadius: '15@ms',
  },
  tabBarLabelStyle: {
    fontFamily: Typography.fonts.semiBold,
    fontSize: '12@ms',
    bottom: '7@ms',
  },
  iconStyle: {
    fontSize: '30@ms',
  },
});
