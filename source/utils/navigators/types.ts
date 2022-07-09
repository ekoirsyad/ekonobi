import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

interface IScreen {
  name: keyof RootStackParamList | keyof BottomTabParamList;
  component?: React.ComponentType<any>;
}

export type IModules = {
  [key in keyof RootStackParamList | keyof BottomTabParamList]: IScreen;
};

export type RootStackParamList = {
  Main: NavigatorScreenParams<BottomTabParamList>;
  Login: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type BottomTabParamList = {
  Dashboard: undefined;
  List: undefined;
};

export type MainTabScreenProps<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
