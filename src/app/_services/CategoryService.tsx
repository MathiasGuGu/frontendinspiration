"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import {
  category_createNewCategory,
  category_getAllCategories,
} from "../_server/CategoryActions";

export const CategoryService = () => {
  const { mutate: createNewCategory } = useMutation({
    mutationKey: ["category"],
    mutationFn: async (name: string) => {
      return category_createNewCategory(name);
    },
    onSuccess: () => {
      return {};
    },
    onError: () => {
      return {};
    },
  });

  const { data: getAllCategories } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      return category_getAllCategories();
    },
  });
  return { createNewCategory, getAllCategories };
};
