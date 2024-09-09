import React from "react";
import { Button } from "@/components/ui/button";
import { FilterX } from "lucide-react";
import { api } from "@/trpc/server";

const CategoriesList = async () => {
  const data = await api.category.getAll();

  if (data) {
    return (
      <div className="flex flex-wrap items-center gap-2 pt-12">
        {data.map((category) => (
          <Button key={category.id} variant={"outline"}>
            {category.name}
          </Button>
        ))}
        <Button>
          <FilterX strokeWidth={1.5} size={20} />
        </Button>
      </div>
    );
  }
};

export default CategoriesList;
