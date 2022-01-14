import { genericAxiosService } from 'services/genericAxiosService';
import { GetUsersResponse } from 'types';

import { fetchUserEndpoint } from './endpoints';

export const getUsersService = (page: number, results = 20) =>
  genericAxiosService<GetUsersResponse>('GET', fetchUserEndpoint, {
    params: {
      page,
      results,
    },
  });
