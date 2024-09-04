import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { posts } from "@/server/db/schema";
import { likedPost } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export const postRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        imageUrl: z.string(),
        title: z.string().min(1),
        description: z.string(),
        link: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(posts).values({
        imageUrl: input.imageUrl,
        title: input.title,
        description: input.description,
        link: input.link,
        createdAt: new Date(),
        userClerkId: "admin",
      });
    }),

  getAll: publicProcedure
    .input(
      z.object({
        categoryId: z.number().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      if (!input.categoryId) {
        const post = await ctx.db.query.posts.findMany({
          limit: 25,
          offset: 0,
        });
        return post ?? null;
      }

      const post = await ctx.db.query.posts.findMany({
        where: (post, { eq }) => eq(post.categoryId, input.categoryId!),
        limit: 25,
        offset: 0,
      });
      return post ?? null;
    }),

  likePost: publicProcedure
    .input(
      z.object({
        postId: z.number(),
        clerkId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(likedPost).values({
        post: input.postId,
        user: input.clerkId,
      });
    }),
  getById: publicProcedure
    .input(
      z.object({
        postId: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      console.log(input.postId);
      const post = await ctx.db.query.posts.findFirst({
        where: (post, { eq }) => eq(post.id, input.postId),
      });

      return post ?? null;
    }),
});
