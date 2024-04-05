/**
 * Search screen styles
 * @format
 */

import { ScaledSheet, Colors, Typography } from '@app/styles';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.brand,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.neutral.white,
  },
  contentContainerStyle: {
    flexGrow: 1,
    padding: '10@ms',
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.primary.brand,
    borderBottomWidth: 2,
    height: '50@ms',
    marginTop: '10@ms',
  },
  backIconStyle: {
    fontSize: '22@ms',
    color: Colors.primary.brand,
  },
  inputStyle: {
    flex: 1,
    fontSize: '16@ms',
    color: Colors.neutral.s700,
  },
  emptyContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whatSearchingLabelStyle: {
    fontSize: '20@ms',
    color: Colors.neutral.s500,
    paddingVertical: '10@ms',
  },
  typeCommentLabelStyle: {
    fontSize: '16@ms',
    color: Colors.neutral.s500,
    fontFamily: Typography.fonts.light,
    textAlign: 'center',
  },
  iconStyle: {
    fontSize: '80@ms',
    color: Colors.neutral.s500,
  },
  productCardStyle: {
    width: '46%',
    margin: '7@ms',
  },

  categoryContainer: {
    width: '70@ms',
    margin: '5@ms',
  },
  categoryImageContainer: {
    height: '60@ms',
    width: '100%',
    borderRadius: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.secondary.s600,
    backgroundColor: Colors.applyOpacity(Colors.secondary.brand, 0.5),
  },
  categoryImageStyle: {
    width: '70%',
    height: '70%',
  },
  categoryTitleStyle: {
    fontSize: '13@ms',
    lineHeight: '16@ms',
    textAlign: 'center',
    color: Colors.textColor.onSecondary,
    marginTop: '5@ms',
  },
});
