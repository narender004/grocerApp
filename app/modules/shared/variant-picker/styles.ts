/**
 * Styles
 * @format
 */

import { ScaledSheet, Colors, Typography } from '@app/styles';

export const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '5@ms',
    borderWidth: '1@ms',
    borderColor: Colors.primary.s600,
    borderRadius: '5@ms',
    paddingVertical: '3@ms',
    paddingHorizontal: '5@ms',
    overflow: 'hidden',
  },
  colorBoxStyle: {
    width: '15@ms',
    height: '15@ms',
    borderRadius: '7.5@ms',
    marginRight: '5@ms',
    borderWidth: 0.5,
    borderColor: Colors.neutral.s200,
  },
  sizeLabelStyle: {
    fontSize: '11@ms',
    fontWeight: 'bold',
    color: Colors.textColor.onSecondary,
    textTransform: 'lowercase',
  },
  nameLabelStyle: {
    flex: 1,
    fontSize: '11@ms',
    fontWeight: 'bold',
    color: Colors.textColor.onSecondary,
  },
  arrowIconStyle: {
    marginLeft: 'auto',
    color: Colors.primary.s600,
    fontSize: '18@ms',
  },
  headingStyle: {
    fontSize: '14@ms',
    color: Colors.neutral.s500,
    fontFamily: Typography.fonts.semiBold,
  },
  colorsContainer: {
    flexDirection: 'row',
    paddingTop: '10@ms',
  },
  colorBoxOuter: {
    marginRight: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50@ms',
    height: '50@ms',
    borderRadius: '25@ms',
    borderWidth: '1@ms',
    borderColor: Colors.neutral.s200,
  },
  colorBoxInner: {
    width: '50@ms',
    height: '50@ms',
    borderRadius: '25@ms',
    borderWidth: '0.5@ms',
    borderColor: Colors.neutral.s200,
  },
  selectedColorBoxStyle: {
    width: '40@ms',
    height: '40@ms',
    borderRadius: '20@ms',
  },
  blockIconStyle: {
    position: 'absolute',
    fontSize: '22@ms',
    color: Colors.neutral.s300,
  },
  sizeBoxStyle: {
    padding: '5@ms',
    paddingHorizontal: '10@ms',
    borderWidth: '0.5@ms',
    borderColor: Colors.neutral.s200,
    borderRadius: '5@ms',
    marginTop: '10@ms',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightAligned: {
    marginLeft: 'auto',
    flexDirection: 'row',
  },
  radioButtonStyle: {
    marginLeft: '5@ms',
  },
  outOfStockStyle: {
    marginHorizontal: '5@ms',
    color: Colors.textColor.outOfStock,
    paddingVertical: '2@ms',
  },

  // Sheet styles
  sheetContainer: {
    minHeight: '25%',
    paddingHorizontal: '20@ms',
    paddingBottom: '50@ms',
    paddingTop: '20@ms',
  },
  closeButtonStyle: {
    elevation: 0,
    width: '150@ms',
    height: '40@ms',
    alignSelf: 'center',
  },
});
