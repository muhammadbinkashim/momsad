import { publicProcedure, router } from "./trpc";
import { authRouter } from "./auth-router";

export const appRouter = router({
  aniApiRouter: publicProcedure.query(() => {
    auth:authRouter
  })
})

export type AppRouter = typeof appRouter