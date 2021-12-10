import { queryGet } from 'services/apiMethods';
import { GetUsersResponse } from 'types';

import { fetchUserEndpoint } from './endpoints';

export const getUsersService = (page: number, results = 20) =>
  queryGet<GetUsersResponse>(fetchUserEndpoint, { page, results });
