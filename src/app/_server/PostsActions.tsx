"use server";
import { api } from "@/trpc/server";

type Post = {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
};

export const posts_createNewPost = async (post: Post) => {
  return await api.post.create(post);
};

export const posts_getAllPosts = async (
  categoryId: number | undefined,
  page: number | undefined,
  userId: string | undefined,
) => {
  return await api.post.getAll({ categoryId, page, userId });
};

export const posts_likePost = async ({
  id,
  clerkId,
}: {
  id: number;
  clerkId: string;
}) => {
  return await api.post.likePost({ postId: id, clerkId });
};

export const posts_getAllLikedPosts = async (userId: string | undefined) => {
  return await api.post.getAllLiked({ userId });
};

export const posts_getPostById = async (id: number) => {
  return await api.post.getById({ postId: id });
};

export const posts_updatePost = async (id: string, post: Post) => {
  return id;
};

export const posts_deletePost = async (id: string) => {
  return id;
};
