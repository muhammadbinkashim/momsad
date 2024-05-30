import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  aniApiRouter: publicProcedure.query(() => {
    return 'hello'
  })
})

export type AppRouter = typeof appRouter