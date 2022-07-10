import {StyleSheet} from 'react-native';
import colorPalette from '~utils/styles/color-palletes';
import {black, bold, regular} from '~utils/styles/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    width: '90%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  changesContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  changesTitle: {
    ...regular,
    marginEnd: 10,
    fontSize: 18,
  },
  changesContent: {
    ...bold,
    color: colorPalette.tertiary,
  },
  balance: {
    ...black,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  buttonContainer: {
    backgroundColor: colorPalette.tertiary,
    width: '75%',
  },
  buttonLabel: {
    ...regular,
    fontSize: 20,
    color: colorPalette.textPrimary,
  },
  buttonLogOut: {
    backgroundColor: 'transparent',
    width: '75%',
  },
  labelLogOut: {
    textDecorationLine: 'underline',
  },
});

export default styles;
