import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { users } from "@/server/db/schema";

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        username: z.string().min(1),
        clerkId: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(users).values({
        username: input.username,
        clerkId: input.clerkId,
      });
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.query.users.findMany();
    return post ?? null;
  }),
});
