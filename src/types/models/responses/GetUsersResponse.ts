import { InfoType, UserType } from '..';

export type GetUsersResponse = {
  results: UserType[];
  info: InfoType;
};
