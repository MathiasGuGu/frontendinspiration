"use client";
import { Button } from "@/components/ui/button";
import { type CategoriesType } from "@/server/db/schema";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const CategorySelectButton = ({ category }: { category: CategoriesType }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category");
  return (
    <Button
      onClick={() => {
        router.push(`?category=${category.id}`);
      }}
      variant={
        categoryId
          ? parseInt(categoryId) === category.id
            ? "default"
            : "outline"
          : "outline"
      }
    >
      {category.name}
    </Button>
  );
};

export default CategorySelectButton;
