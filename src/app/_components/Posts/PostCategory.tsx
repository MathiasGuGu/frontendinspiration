"use client";
import { category_getAllCategories } from "@/app/_server/CategoryActions";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const PostCategory = ({ categoryId }: { categoryId: number }) => {
  const { data } = useQuery({
    queryKey: ["allCategories"],
    queryFn: async () => {
      return await category_getAllCategories();
    },
  });
  return (
    <div className="absolute -top-3 left-2 z-20 rounded-lg border border-zinc-400 bg-white px-3 py-1 text-xs font-medium text-zinc-600">
      {data?.find((category) => category.id === categoryId)?.name}
    </div>
  );
};

export default PostCategory;
