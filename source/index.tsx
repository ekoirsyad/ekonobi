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

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabBar = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name={'Dashboard'} component={DashboardScreen} />
        <Tab.Screen name={'List'} component={ListScreen} />
      </Tab.Navigator>
    </>
  );
};

/**
 * NavigationContainer wrapped with SafeAreaView
 */
const Main = () => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name={'Login'} component={LoginScreen} />
          <Stack.Screen name={'Main'} component={BottomTabBar} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Main;
