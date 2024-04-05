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
  sliderStyle: {
    borderBottomWidth: 2,
    borderColor: Colors.secondary.brand,
    height: '200@ms',
  },
  divider: {
    height: '5@ms',
    width: '100%',
    backgroundColor: Colors.secondary.brand,
  },
  browseCatLabel: {
    fontSize: '16@ms',
    fontFamily: Typography.fonts.bold,
    color: Colors.textColor.onSecondary,
   
    marginLeft: '10@ms',
  },
  categoryListStyle: {
    marginTop: '5@ms',
    paddingHorizontal: '5@ms',
  },
  categoryContainer: {
    width: '90@ms',
    margin: '5@ms',
  },
  categoryImageContainer: {
    height: '80@ms',
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

  catProductContainer: {
    paddingVertical: '10@ms',
  },
  evenCatProductContainer: {
    backgroundColor: Colors.secondary.brand,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '10@ms',
    paddingHorizontal: '10@ms',
  },
  categoryLabelStyle: {
    fontSize: '16@ms',
    fontFamily: Typography.fonts.bold,
    color: Colors.textColor.onSecondary,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  productListStyle: {
    paddingHorizontal: '5@ms',
  },
  categoryListViewStyle: {
    alignItems: 'center',
    marginTop: '20@ms',
  }
});
