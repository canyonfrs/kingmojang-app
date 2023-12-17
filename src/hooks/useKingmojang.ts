import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

import { get, post, put } from "../remotes";

const BASE_PATH = "/api/v1/memos";
const QUERY_KEY = "validate-verification-code";

async function createMemo(code: string) {
  return post<[]>(BASE_PATH, {
    headers: {
      Authorization: `Bearer ${code}`,
    },
  });
}

async function readMemo(id: string, code: string) {
  return get<[]>(`${BASE_PATH}/${id}`, {
    headers: {
      Authorization: `Bearer ${code}`,
    },
  });
}

async function updateMemo(id: string, code: string) {
  return put<[]>(`${BASE_PATH}/${id}`, {
    headers: {
      Authorization: `Bearer ${code}`,
    },
  });
}

export const useCreateMemo = (code: string) => {
  return useMutation([`${QUERY_KEY}/create`, code], () => createMemo(code));
};

export const useReadMemo = (id: string, code: string) => {
  return useQuery([`${QUERY_KEY}/read`, code], () => readMemo(id, code));
};

export const useUpdateMemo = (id: string, code: string) => {
  return useMutation([`${QUERY_KEY}/update`, code], () => updateMemo(id, code));
};
