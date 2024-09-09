import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { categories } from "@/server/db/schema";

export const categoryRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(categories).values({
        name: input.title,
      });
    }),

  get: publicProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.query.categories.findMany({});

    return post ?? null;
  }),
});
