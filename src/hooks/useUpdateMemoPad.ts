import { useMutation } from "@tanstack/react-query";

import { post } from "../remotes";

interface UpdateMemoPadProps {
  memoPadId: string;
  memoPad: string;
  token: string;
  visibility: "PUBLIC";
}

async function updateMemoPad({ memoPadId, memoPad, visibility, token }: UpdateMemoPadProps) {
  return post<[]>(`/memos/${memoPadId}`, {
    data: {
      memoPad,
      visibility,
    },
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function useUpdateMemo({ memoPadId, memoPad, visibility, token }: UpdateMemoPadProps) {
  return useMutation([`memo-${memoPadId}`, memoPad], () =>
    updateMemoPad({
      memoPadId,
      memoPad,
      visibility,
      token,
    }),
  );
}
