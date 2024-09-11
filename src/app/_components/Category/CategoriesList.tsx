import { api } from "@/trpc/server";
import React from "react";
import CategorySelectButton from "./CategorySelectButton";
import CategoryDeselectButton from "./CategoryDeselectButton";

const CategoriesList = async () => {
  const allCategories = await api.category.get();
  if (allCategories.length === 0) return <div>No categories</div>;
  return (
    <div className="flex flex-col gap-4 pb-16 pt-6">
      <h2 className="text-xl text-zinc-700">Filter by category</h2>
      <div className="flex flex-wrap items-center gap-2">
        {allCategories.map((category) => (
          <CategorySelectButton
            key={category.id}
            category={category}
          ></CategorySelectButton>
        ))}
        <CategoryDeselectButton />
      </div>
    </div>
  );
};

export default CategoriesList;
