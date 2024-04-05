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
  headerContainer: {
    padding: '15@ms',
    borderBottomWidth: '2@ms',
    borderColor: Colors.secondary.brand,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLabel: {
    flex: 1,
    fontFamily: Typography.fonts.semiBold,
    fontSize: '16@ms',
    color: Colors.neutral.s800,
    paddingRight: '5@ms',
  },
  arrowIconStyle: {
    marginLeft: 'auto',
    fontSize: '22@ms',
    color: Colors.neutral.s800,
  },
  contentContainer: {
    padding: '10@ms',
  },
  contentLabel: {
    fontSize: '15@ms',
  },
});
