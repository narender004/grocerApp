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
  categoryHeaderStyle: {
    flexDirection: 'row',
    padding: '12@ms',
    paddingHorizontal: '15@ms',
    alignItems: 'center',
    backgroundColor: Colors.neutral.white,
    borderWidth: '1.5@ms',
    borderColor: Colors.secondary.brand,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  subCategoryHeaderStyle: {
    borderWidth: 0,
  },
  categoryImgStyle: {
    width: '35@ms',
    height: '35@ms',
    borderRadius: '5@ms',
  },
  nameStyle: {
    fontSize: '16@ms',
    fontFamily: Typography.fonts.semiBold,
    color: Colors.textColor.onSecondary,
    marginLeft: '10@ms',
  },
  arrowIconStyle: {
    fontSize: '25@ms',
    marginLeft: 'auto',
    color: Colors.textColor.onSecondary,
  },
});
