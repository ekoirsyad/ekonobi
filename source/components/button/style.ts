import {StyleSheet} from 'react-native';
import colorPalette from '~utils/styles/color-palletes';
import {regular} from '~utils/styles/typography';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: colorPalette.blue,
    borderRadius: 8,
    padding: 14,
  },
  label: {
    ...regular,
    color: colorPalette.textPrimary,
  },
  icon: {
    marginRight: 10,
  },
});

export default styles;
