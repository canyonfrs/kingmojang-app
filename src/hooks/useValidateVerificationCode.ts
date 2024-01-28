import { useQuery } from "@tanstack/react-query";
import type { AxiosError, AxiosResponse } from "axios";

import { get } from "../remotes";

const PATH = "/members/validate-verification-code";
const QUERY_KEY = "validate-verification-code";

export interface ValidateVerificationCodeError {
  code: string;
  error: "UNAUTHORIZED";
  message: string;
  status: 401;
  timestamp: string;
}

export interface ValidateVerificationCodeResponse {
  email: string;
  id: number;
  name: string;
  phoneNumber: string;
  role: "STREAMER" | "ADMIN";
  token: string;
}

async function validateVerificationCode<T>(code: string) {
  return get<T>(PATH, {
    headers: {
      Authorization: `Bearer ${code}`,
    },
  });
}

export function useValidateVerificationCode(code: string) {
  return useQuery<AxiosResponse<ValidateVerificationCodeResponse>, AxiosError<ValidateVerificationCodeError>>(
    [QUERY_KEY, code],
    () => validateVerificationCode(code),
    {
      enabled: false,
      retry: false,
    },
  );
}
