import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  logo: {
    width: '15%',
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 40,
  },
  errorMessage: {
    alignSelf: 'center',
    padding: 10,
  },
});

export default style;
