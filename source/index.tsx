import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, StatusBar} from 'react-native';
import style from '~style';
import colors from '~utils/styles/color-palletes';
import {BottomTabParamList, RootStackParamList} from '~utils/navigators/types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '~screens/login';
import DashboardScreen from '~screens/dashboard';
import ListScreen from '~screens/list';
import {useStorage} from '~utils/hooks/useStorage';
import TabBar from '~components/bottom-tab-bar';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

/**
 * BottomTabBar is a custom component that is used to render the bottom tab bar
 * @returns {JSX.Element}
 */
const BottomTabBar = () => {
  return (
    <>
      <Tab.Navigator
        tabBar={props => <TabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name={'List'} component={ListScreen} />
        <Tab.Screen name={'Dashboard'} component={DashboardScreen} />
      </Tab.Navigator>
    </>
  );
};

/**
 * NavigationContainer wrapped with SafeAreaView
 */
const Main = () => {
  const {value} = useStorage('token', '');

  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {value ? (
            <>
              <Stack.Screen name={'Main'} component={BottomTabBar} />
            </>
          ) : (
            <>
              <Stack.Screen name={'Login'} component={LoginScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Main;
