import { useQuery } from "@tanstack/react-query";

import { get } from "../remotes";

async function getMemoList() {
  return get<[]>("/");
}

export function useMemolList() {
  return useQuery<[]>(["memo-list"], getMemoList);
}
