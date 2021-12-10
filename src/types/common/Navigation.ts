import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export enum Route {
  HomeScreen = 'HomeScreen',
  Storybook = 'Storybook',
}

type NoParams = undefined;

/* Params of navigators */

export type RootStackParams = {
  [Route.HomeScreen]: NoParams;
  [Route.Storybook]: NoParams;
};

/* Utility types for screens */

export type RootStackNavigationProp<R extends keyof RootStackParams> = StackNavigationProp<
  RootStackParams,
  R
>;

export type RootStackRouteProp<R extends keyof RootStackParams> = RouteProp<RootStackParams, R>;

export interface RootStackScreenProps<R extends keyof RootStackParams> {
  navigation: RootStackNavigationProp<R>;
  route: RootStackRouteProp<R>;
}
