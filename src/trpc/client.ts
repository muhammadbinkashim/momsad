// src/trpc/client.ts
import { createTRPCNext } from "@trpc/next";
import type { AppRouter } from "@/server/routers";
import superjson from "superjson";

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      transformer: superjson,
      links: [
        {
          url: "/api/trpc",
        },
      ],
    };
  },
  ssr: false,
});
