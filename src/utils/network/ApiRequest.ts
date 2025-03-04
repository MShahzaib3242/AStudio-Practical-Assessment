import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export default function ApiRequestHomnifi() {
  const request = axios.create({
    baseURL: "https://dummyjson.com",
    responseType: "json",
    socketPath: null,
  });

  request.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      return config;
    }
  );

  request.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => response,
    (error: AxiosError): Promise<AxiosError> | AxiosError => {
      return Promise.reject(error.response);
    }
  );

  return request;
}
