"use client";
import { category_getAllCategories } from "@/app/_server/CategoryActions";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import CategoriesLink from "./CategoriesLink";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FilterX } from "lucide-react";
import { useFilterStore } from "@/stores/filterStore";

const CategoriesList = () => {
  const router = useRouter();
  const setFilter = useFilterStore((state) => state.setFilter);

  const pushFilter = (filter: number) => {
    router.push(`?filter=${filter}`);
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["allCategories"],
    queryFn: async () => await category_getAllCategories(),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (data) {
    return (
      <div className="flex flex-wrap items-center gap-2 pt-12">
        {data.map((category) => (
          <Button
            key={category.id}
            variant={"outline"}
            onClick={() => {
              pushFilter(category.id);
              setFilter(category.id);
            }}
          >
            {category.name}
          </Button>
        ))}
        <Button variant={"secondary"} onClick={() => router.push("/")}>
          <FilterX strokeWidth={1.5} size={20} />
        </Button>
      </div>
    );
  }
};

export default CategoriesList;
