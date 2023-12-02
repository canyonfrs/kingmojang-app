import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import { BASE_URL } from "../constants/url";

export type RequestMethod = "GET" | "POST" | "DELETE" | "PUT";
export interface RequestAPIType extends Omit<AxiosRequestConfig, "baseURL"> {
  method: RequestMethod;
  url: string;
  errorHandler?: (error: unknown) => never;
}

export type RequestConfigType = Omit<
  RequestAPIType,
  "url" | "method" | "baseURL"
>;

export async function axiosRequest<T>({
  url,
  params,
  method,
  errorHandler,
  ...restProps
}: RequestAPIType) {
  const response = await axios
    .request<T>({
      baseURL: BASE_URL,
      method,
      url,
      params,
      ...restProps,
    })
    .catch(errorHandler);
  return response as T;
}

export function get<T>(
  url: string,
  options?: Omit<RequestAPIType, "url" | "method">
) {
  return axiosRequest<T>({ url, method: "GET", ...options });
}

export function post<T>(
  url: string,
  options?: Omit<RequestAPIType, "url" | "method">
) {
  return axiosRequest<T>({ url, method: "POST", ...options });
}

export function del<T>(
  url: string,
  options?: Omit<RequestAPIType, "url" | "method">
) {
  return axiosRequest<T>({ url, method: "DELETE", ...options });
}

export function put<T>(
  url: string,
  options?: Omit<RequestAPIType, "url" | "method">
) {
  return axiosRequest<T>({ url, method: "PUT", ...options });
}
