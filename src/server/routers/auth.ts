// src/server/routers/auth.ts
import { z } from "zod";
import { createRouter } from "@/server/createRouter"; // Adjust the import based on your project structure

// Mock function for creating a user, replace with actual implementation
const createUser = async ({ email, password }: { email: string; password: string }) => {
  return { id: 1, email };
};

export const authRouter = createRouter()
  .mutation("createPayloadUser", {
    input: z.object({
      email: z.string().email(),
      password: z.string().min(6),
    }),
    async resolve({ input }) {
      const { email, password } = input;
      const user = await createUser({ email, password });
      return user;
    },
  });
