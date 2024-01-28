import { useMutation } from "@tanstack/react-query";

import { post } from "../remotes";

const MUTATE_KEY = "create-memo-pad";

interface CreateMemoPadResponse {
  memoId: number;
  content: string;
  writerId: number;
  visibility: string;
  createdDateTime: string;
  updatedDateTime: string;
}

async function createMemoPad() {
  return post<CreateMemoPadResponse>("/memos");
}

export function useCreateMemoPad() {
  return useMutation<CreateMemoPadResponse>([MUTATE_KEY], createMemoPad);
}
