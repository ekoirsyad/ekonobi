import React from 'react';
import {Pressable, Text, TextStyle, ViewStyle} from 'react-native';
import colorPalette from '~utils/styles/color-palletes';
import styles from '~components/button/style';
import Icon from 'react-native-vector-icons/Feather';

interface IButton {
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
  labelStyle?: TextStyle;
  label: string;
  disabled?: boolean;
  icon?: string;
}

const Button = ({
  icon,
  label,
  onPress,
  disabled,
  style,
  labelStyle,
}: IButton) => {
  const buttonStyle: ViewStyle | ViewStyle[] = icon
    ? [
        styles.container,
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]
    : styles.container;

  return (
    <Pressable
      style={[buttonStyle, style]}
      onPress={onPress}
      disabled={disabled}
      android_ripple={{
        color: colorPalette.primary,
      }}>
      {icon ? (
        <Icon
          style={styles.icon}
          name={icon}
          size={20}
          color={colorPalette.textPrimary}
        />
      ) : (
        <></>
      )}
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </Pressable>
  );
};

export default Button;
