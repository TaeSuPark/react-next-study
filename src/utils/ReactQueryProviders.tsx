"use client"

import {
  QueryClientProvider,
  QueryClient,
  useQueryClient,
} from "@tanstack/react-query"

export default function ReactQueryProviders({
  children,
}: React.PropsWithChildren) {
  const client = useQueryClient(new QueryClient())

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
