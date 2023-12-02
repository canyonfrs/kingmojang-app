import { useMutation } from "@tanstack/react-query";
import { post } from "../remotes";

interface UseUpdateMemo {
  memoId: string;
}

async function updateMemo() {
  return post<[]>("/", { data: {} });
}

export function useUpdateMemo({ memoId }: UseUpdateMemo) {
  return useMutation([`memo-${memoId}`], updateMemo);
}
