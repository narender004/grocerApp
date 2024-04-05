/**
 * Styles
 * @format
 */

import { ScaledSheet, Colors, Typography } from '@app/styles';

export const styles = ScaledSheet.create({
  scrollViewStyle: {
    maxHeight: '60@ms',
  },
  scrollViewContentStyle: {
    flexGrow: 1,
    height: '50@ms',
    backgroundColor: Colors.neutral.white,
    elevation: 5,
    alignItems: 'center',
  },
  itemStyle: {
    marginHorizontal: '10@ms',
    justifyContent: 'center',
    paddingHorizontal: '10@ms',
    borderRadius: '20@ms',
    height: '70%',
    overflow: 'hidden',
  },
  selectedItem: {
    backgroundColor: Colors.primary.brand,
  },
  labelStyle: {
    fontSize: '14@ms',
    fontFamily: Typography.fonts.semiBold,
  },
  selectedLabel: {
    color: Colors.neutral.white,
    fontFamily: Typography.fonts.bold,
  },
});
