import { api } from "@/trpc/server";
import React from "react";

const PostCategory = async ({ categoryId }: { categoryId: number }) => {
  const data = await api.category.getAll();
  return (
    <div className="absolute -top-3 left-2 z-20 rounded-lg border border-zinc-400 bg-white px-3 py-1 text-xs font-medium text-zinc-600">
      {data?.find((category) => category.id === categoryId)?.name}
    </div>
  );
};

export default PostCategory;
