import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

export const genericAxiosService = <ResponseType = AxiosResponse>(
  method: Method,
  endpoint: string,
  config?: AxiosRequestConfig | undefined,
): Promise<ResponseType> => {
  return axios({
    method: method,
    url: endpoint,
    headers: { ...config?.headers },
    ...config,
  })
    .then((response: AxiosResponse<ResponseType>) => response.data)
    .catch((error: Error) => {
      throw error;
    });
};
