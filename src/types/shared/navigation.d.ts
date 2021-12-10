import { RootStackParams } from 'types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParams {}
  }
}
