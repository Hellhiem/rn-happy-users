import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const genericDelete = <ResponseType>(endpoint: string): Promise<ResponseType> => {
  return axios
    .delete(endpoint)
    .then((response: AxiosResponse<ResponseType>) => response.data)
    .catch((error: Error) => {
      throw error;
    });
};

const genericPost = <ResponseType>(
  endpoint: string,
  postParameters?: { [key: string]: unknown } | FormData,
): Promise<ResponseType> => {
  return axios
    .post(endpoint, postParameters)
    .then((response: AxiosResponse<ResponseType>) => response.data)
    .catch((error: Error) => {
      throw error;
    });
};

const genericGet = <ResponseType>(
  endpoint: string,
  config?: AxiosRequestConfig | undefined,
): Promise<ResponseType> => {
  return axios
    .get(endpoint, { ...config, headers: { ...config?.headers } })
    .then((response: AxiosResponse<ResponseType>) => response.data)
    .catch((error: Error) => {
      throw error;
    });
};

const genericGetWithHeaders = <ResponseType>(
  endpoint: string,
  config?: AxiosRequestConfig | undefined,
): Promise<Pick<AxiosResponse<ResponseType>, 'data' | 'headers'>> => {
  return axios
    .get(endpoint, { ...config, headers: { ...config?.headers } })
    .then((response: AxiosResponse<ResponseType>) => ({
      data: response.data,
      headers: response.headers,
    }))
    .catch((error: Error) => {
      throw error;
    });
};

const queryGet = <ResponseType>(endpoint: string, params?: object): Promise<ResponseType> => {
  return axios
    .get(endpoint, { params })
    .then((response: AxiosResponse<ResponseType>) => response.data)
    .catch((error: Error) => {
      throw error;
    });
};

const genericPatch = <ResponseType>(
  endpoint: string,
  postParameters: { [key: string]: unknown },
): Promise<ResponseType> => {
  return axios
    .patch(endpoint, postParameters)
    .then((response: AxiosResponse<ResponseType>) => response.data)
    .catch((error: Error) => {
      throw error;
    });
};

export { genericDelete, genericPost, genericGet, genericGetWithHeaders, genericPatch, queryGet };
