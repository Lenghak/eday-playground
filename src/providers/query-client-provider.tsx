"use client";

import { type PropsWithChildren, useState } from "react";

import { getQueryClient } from "@/lib/query-client";

// Since QueryClientProvider relies on useContext under the hood, we have to put 'use client' on top
import { QueryClientProvider as QueryClientPrimitiveProvider } from "@tanstack/react-query";

export function QueryClientProvider({ children }: PropsWithChildren) {
  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary
  const [queryClient] = useState(getQueryClient());

  return (
    <QueryClientPrimitiveProvider client={queryClient}>
      {children}
    </QueryClientPrimitiveProvider>
  );
}
