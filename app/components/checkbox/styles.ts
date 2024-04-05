/**
 * Checkbox Styles
 * @format
 */

import { ScaledSheet, Colors } from '@app/styles';

export const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    fontSize: '22@ms',
    color: Colors.neutral.white,
    marginRight: '5@ms',
  },
  labelStyle: {
    color: Colors.textColor.onPrimary,
    fontSize: '16@ms',
  },
  errorStyle: {
    color: Colors.error.light,
    fontSize: '12@ms',
    marginTop: '5@ms',
  },
});
