"use server";
import { api } from "@/trpc/server";

export const getAllCategories = async () => {
  return await api.category.get();
};

export const getAllPosts = async (input: {
  categoryId?: number | undefined;
  page?: number | undefined;
  userId?: string | undefined;
}) => {
  return await api.post.getAll(input);
};
