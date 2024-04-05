/**
 * Sizing
 * @format
 */

import { Dimensions } from 'react-native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('screen');

type Screen = 'width' | 'height';
export const screen: Record<Screen, number> = {
  width: screenWidth,
  height: screenHeight,
};

type Vp = 'vw' | 'vh';
export const vp: Record<Vp, number> = {
  vw: screenWidth / 100,
  vh: screenHeight / 100,
};
