import {TextStyle} from 'react-native';
import colorPalette from './color-palletes';

/**
 * @file Stylesheet for typography.
 */
const regular: TextStyle = {
  fontFamily: 'CircularStd-Book',
  color: colorPalette.textSecondary,
  fontSize: 16,
};

const bold: TextStyle = {
  fontFamily: 'CircularStd-Bold',
  color: colorPalette.textPrimary,
  fontSize: 18,
};

const black: TextStyle = {
  fontFamily: 'CircularStd-Black',
  color: colorPalette.textPrimary,
  fontSize: 42,
};

const italic: TextStyle = {
  fontFamily: 'CircularStd-BookItalic',
  color: colorPalette.secondary,
  fontSize: 16,
};

export {regular, italic, bold, black};
