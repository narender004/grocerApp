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
    flexGrow: 1,
    padding: '20@ms',
    paddingTop: 0,
  },
  emptyPlaceholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderImgStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  inputLabelStyle: {
    fontFamily: Typography.fonts.semiBold,
  },
  saveButtonStyle: {
    elevation: 2,
    marginTop: '20@ms',
    height: '50@ms',
  },
  listStyle: {
    flexGrow: 1,
    padding: '5@ms',
    paddingHorizontal: '8@ms',
  },
  addressCardStyle: {
    marginTop: '10@ms',
  },
  addButtonStyle: {
    position: 'absolute',
    bottom: '20@ms',
    right: '10@ms',
    backgroundColor: Colors.primary.brand,
    height: '50@ms',
    width: '50@ms',
    borderRadius: '25@ms',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    overflow: 'hidden',
  },
  addIconStyle: {
    fontSize: '40@ms',
    color: Colors.neutral.white,
    marginLeft: '2@ms',
  },
});
