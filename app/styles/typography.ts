/**
 * Typography
 * @format
 */

type Fonts =
  | 'regular'
  | 'bold'
  | 'boldItalic'
  | 'extraBold'
  | 'extraBoldItalic'
  | 'italic'
  | 'light'
  | 'lightItalic'
  | 'semiBold'
  | 'semiBoldItalic';
export const fonts: Record<Fonts, string> = {
  regular: 'OpenSans-Regular',
  bold: 'OpenSans-Bold',
  boldItalic: 'OpenSans-BoldItalic',
  extraBold: 'OpenSans-ExtraBold',
  extraBoldItalic: 'OpenSans-ExtraBoldItalic',
  italic: 'OpenSans-Italic',
  light: 'OpenSans-Light',
  lightItalic: 'OpenSans-LightItalic',
  semiBold: 'OpenSans-SemiBold',
  semiBoldItalic: 'OpenSans-SemiBoldItalic',
};
