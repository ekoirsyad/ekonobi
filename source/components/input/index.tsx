import React, {useCallback} from 'react';
import {Text, TextInput, TextInputProps, View, ViewStyle} from 'react-native';
import colorPalette from '~utils/styles/color-palletes';
import Icon from 'react-native-vector-icons/Ionicons';
import {italic, regular} from '~utils/styles/typography';
import styles from '~components/input/style';

interface IInput {
  label: string;
  placeholder: string;
  errMessage?: string;
  value: string;
  isEditable?: boolean;
  onChangeText: (text: string) => void;
  style?: ViewStyle;
  isPassword?: boolean;
  textContentType: TextInputProps['textContentType'];
}
const Input = ({
  errMessage,
  label,
  placeholder,
  onChangeText,
  value,
  isEditable,
  isPassword,
  textContentType,
}: IInput) => {
  const [showPassword, setShowPassword] = React.useState(true);

  const onTogglePassword = useCallback(() => {
    if (textContentType === 'password') {
      setShowPassword(!showPassword);
    }
  }, [textContentType, showPassword]);

  return (
    <View style={styles.container}>
      <Text style={regular}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={isPassword ? showPassword : false}
          textContentType={textContentType}
          editable={isEditable}
          onChangeText={onChangeText}
          value={value}
          placeholderTextColor={colorPalette.textPrimaryTransparent}
          style={styles.input}
          placeholder={placeholder}
        />
        {isPassword ? (
          <Icon
            onPress={onTogglePassword}
            style={styles.icon}
            name={showPassword ? 'eye' : 'eye-off'}
            size={20}
            color={colorPalette.textPrimaryTransparent}
          />
        ) : null}
      </View>
      {errMessage ? (
        <Text style={[italic, styles.errorMessage]}>{errMessage}</Text>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Input;
