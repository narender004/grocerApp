/**
 * Alert Styles
 * @format
 */

import { StyleSheet } from 'react-native';

import { ScaledSheet, Colors, Sizing } from '@app/styles';

export const styles = ScaledSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.applyOpacity(Colors.neutral.black, 0.3),
  },
  alertBox: {
    backgroundColor: Colors.neutral.white,
    width: '280@ms',
    maxWidth: Sizing.vp.vw * 80,
    paddingHorizontal: '15@ms',
    borderRadius: '10@ms',
    paddingTop: '20@ms',
    elevation: 5,
    shadowColor: Colors.applyOpacity(Colors.neutral.black, 0.2),
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  titleStyle: {
    color: Colors.neutral.black,
    fontSize: '20@ms',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '5@ms',
  },
  messageStyle: {
    color: Colors.neutral.s800,
    fontSize: '15@ms',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    borderTopWidth: 0.8,
    borderColor: Colors.applyOpacity(Colors.neutral.black, 0.1),
    marginTop: '20@ms',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  columnButtonContainer: {
    flexDirection: 'column',
  },
  buttonStyle: {
    flex: 1,
    height: '45@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnButtonStyle: {
    flex: 0,
    width: '100%',
  },
  buttonLabelStyle: {
    color: '#4286f4',
    fontWeight: 'bold',
    fontSize: '18@ms',
  },
  default: {},
  success: {
    color: 'green',
  },
  danger: {
    color: 'red',
  },
});
