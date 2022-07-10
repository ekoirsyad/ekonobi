import {StyleSheet} from 'react-native';
import colorPalette from '~utils/styles/color-palletes';
import {regular} from '~utils/styles/typography';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: colorPalette.textSecondary,
  },
  coinInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
  amount: {
    ...regular,
    fontSize: 18,
    color: colorPalette.textPrimary,
  },
});

export default styles;
