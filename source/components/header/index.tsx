import React, {useCallback, useRef} from 'react';
import {TextInput, View} from 'react-native';
import colorPalette from '~utils/styles/color-palletes';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '~/components/header/style';

interface IHeader {
  query: string;
  onChangeText: (text: string) => void;
}

const Header = ({onChangeText, query}: IHeader) => {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const refInput = useRef<TextInput>(null);

  const blurInput = useCallback(() => {
    if (refInput.current) {
      refInput.current.blur();
    }
  }, [refInput]);

  return (
    <View
      style={
        !isFocused ? [styles.container, {paddingStart: 15}] : styles.container
      }>
      {isFocused ? (
        <Icon
          style={styles.icon}
          name={'chevron-back'}
          size={20}
          color={colorPalette.textPrimary}
          onPress={blurInput}
        />
      ) : (
        <></>
      )}
      <View style={styles.searchBar}>
        <Icon name={'search'} size={18} color={colorPalette.textPrimary} />
        <TextInput
          ref={refInput}
          textContentType={'none'}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={query}
          placeholderTextColor={colorPalette.textPrimaryTransparent}
          style={styles.input}
          placeholder={'Search'}
        />
      </View>
    </View>
  );
};

export default Header;
