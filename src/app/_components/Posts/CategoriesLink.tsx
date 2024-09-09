"use client";
import { Button } from "@/components/ui/button";
import { CategoriesType } from "@/server/db/schema";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const CategoriesLink = ({ category }: { category: CategoriesType }) => {
  const router = useRouter();
  const pushFilter = () => {
    router.push(`?filter=${category.id}`);
  };
  return (
    <Button variant={"ghost"} onClick={pushFilter}>
      {category.name}
    </Button>
  );
};

export default CategoriesLink;
