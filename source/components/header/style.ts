import {StyleSheet} from 'react-native';
import colorPalette from '~utils/styles/color-palletes';
import {regular} from '~utils/styles/typography';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  icon: {
    paddingHorizontal: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colorPalette.transparentWhite,
    borderRadius: 8,
    flex: 1,
    height: 40,
    marginEnd: 20,
    paddingHorizontal: 10,
  },
  input: {
    ...regular,
    flex: 1,
    fontSize: 14,
  },
});

export default styles;
