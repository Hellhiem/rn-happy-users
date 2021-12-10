import { queryGet } from 'services/apiMethods';
import { UserType } from 'types';

import { fetchUserEndpoint } from './endpoints';

export const getUsersService = (page: number, results = 20) =>
  queryGet<UserType[]>(fetchUserEndpoint, { page, results });
