"use server";
import { api } from "@/trpc/server";

export const category_createNewCategory = async (category: string) => {
  return await api.category.create({ title: category });
};

export const category_getAllCategories = async () => {
  return await api.category.getAll();
};

export const category_deleteCategory = async (categoryId: string) => {
  return;
};

export const category_updateCategory = async (categoryId: string) => {
  return;
};
