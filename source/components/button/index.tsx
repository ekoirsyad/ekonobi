import React from 'react';
import {Pressable, Text, ViewStyle} from 'react-native';
import colorPalette from '~utils/styles/color-palletes';
import styles from './style';

interface IButton {
  onPress?: () => void;
  style?: ViewStyle;
  label: string;
  disabled?: boolean;
}

const Button = ({label, onPress, disabled}: IButton) => {
  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
      disabled={disabled}
      android_ripple={{
        color: colorPalette.primary,
      }}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export default Button;
