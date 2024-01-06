import { useQuery } from "@tanstack/react-query";

import { get } from "../remotes";

const PATH = "/members/validate-verification-code";
const QUERY_KEY = "validate-verification-code";

async function validateVerificationCode(code: string) {
  return get<[]>(PATH, {
    headers: {
      Authorization: `Bearer ${code}`,
    },
  });
}

export function useValidateVerificationCode(code: string) {
  return useQuery([QUERY_KEY, code], () => validateVerificationCode(code), {
    enabled: false,
  });
}
