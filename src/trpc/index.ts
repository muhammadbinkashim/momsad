import { router } from "./trpc";
import { authRouter } from "./auth-router"; // Adjust the import path

export const appRouter = router({
  auth: authRouter,
  // other routers...
});

export type AppRouter = typeof appRouter;
