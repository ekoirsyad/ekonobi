import {StyleSheet} from 'react-native';
import colorPalette from '~utils/styles/color-palletes';

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
    backgroundColor: colorPalette.black,
    borderTopWidth: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    maxWidth: 120,
  },
  icon: {
    height: 25,
    width: 25,
  },
  line: {
    height: 2,
    width: 25,
    backgroundColor: colorPalette.textSecondary,
  },
});

export default style;
