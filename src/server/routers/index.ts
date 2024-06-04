// src/server/routers/index.ts
import { createRouter } from "@/server/createRouter"; // Adjust the import based on your project structure
import { authRouter } from "./auth";

export const appRouter = createRouter()
  .merge("auth.", authRouter);

export type AppRouter = typeof appRouter;
