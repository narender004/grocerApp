/**
 * SearchBar Styles
 * @format
 */

import { ScaledSheet, Colors, Outlines } from '@app/styles';

export const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '45@ms',
    backgroundColor: Colors.neutral.white,
    paddingHorizontal: '15@ms',
    ...Outlines.shadow.base,
    borderBottomWidth: 0.5,
    borderColor: Colors.neutral.s100,
  },
  labelStyle: {
    color: Colors.neutral.s300,
    fontSize: '16@ms',
  },
  searchIconStyle: {
    fontSize: '22@ms',
    color: Colors.primary.brand,
    marginLeft: 'auto',
  },
});
