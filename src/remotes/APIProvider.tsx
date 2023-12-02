import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";

const queryClient = new QueryClient();

type BaseURLContextType = PropsWithChildren;

function QueryProvider({ children }: BaseURLContextType) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export function APIProvider({ children }: BaseURLContextType) {
  return <QueryProvider>{children}</QueryProvider>;
}
