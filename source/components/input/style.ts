import {StyleSheet} from 'react-native';
import colorPalette from '~utils/styles/color-palletes';
import {regular} from '~utils/styles/typography';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 15,
  },
  inputContainer: {
    height: 45,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    backgroundColor: colorPalette.primaryDarker,
    marginTop: 10,
  },
  input: {
    ...regular,
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
  },
  icon: {
    position: 'absolute',
    end: 10,
  },
  errorMessage: {
    fontSize: 14,
    marginTop: 10,
  },
});

export default styles;
