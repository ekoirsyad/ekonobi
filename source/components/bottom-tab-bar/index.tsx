import * as React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import colorPalette from '~utils/styles/color-palletes';
import style from '~components/bottom-tab-bar/style';

interface IIconTab {
  isFocused: boolean;
  name: string;
}

const IconTab = ({isFocused, name}: IIconTab) => {
  if (name === 'Dashboard') {
    return (
      <Image
        source={require('~assets/colorized-bare-logo.png')}
        style={
          isFocused
            ? style.icon
            : [
                style.icon,
                {tintColor: colorPalette.textSecondary, height: 25, width: 25},
              ]
        }
      />
    );
  }
  return (
    <View>
      <Feather
        name="trending-up"
        size={25}
        style={style.icon}
        color={
          isFocused ? colorPalette.textPrimary : colorPalette.textSecondary
        }
      />
      <View
        style={
          isFocused
            ? [
                style.line,
                {
                  backgroundColor: colorPalette.textPrimary,
                },
              ]
            : style.line
        }
      />
    </View>
  );
};

const TabBar = (props: BottomTabBarProps) => {
  const {state, descriptors, navigation} = props;

  return (
    <View style={style.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={style.button}>
            <IconTab name={label} isFocused={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
