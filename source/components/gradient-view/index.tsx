import React, {ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colorPalette from '~utils/styles/color-palletes';
import styles from '~components/gradient-view/style';

interface IGradientView {
  children: ReactNode;
  style?: ViewStyle;
}

const GradientView = ({children, style}: IGradientView) => {
  return (
    <LinearGradient
      locations={[0.05, 0.15, 0.4]}
      colors={[
        colorPalette.primary,
        colorPalette.primaryDarker,
        colorPalette.black,
      ]}
      style={[style, styles.container]}>
      {children}
    </LinearGradient>
  );
};

export default GradientView;
