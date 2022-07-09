import {TextStyle} from 'react-native';
import colorPalette from './color-palletes';

const regular: TextStyle = {
  fontFamily: 'CircularStd-Book',
  color: colorPalette.textSecondary,
  fontSize: 16,
};

const italic: TextStyle = {
  fontFamily: 'CircularStd-BookItalic',
  color: colorPalette.secondary,
  fontSize: 16,
};

export {regular, italic};
