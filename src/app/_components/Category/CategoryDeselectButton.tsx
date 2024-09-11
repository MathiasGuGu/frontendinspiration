"use client";
import { Button } from "@/components/ui/button";
import { FilterX } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const CategoryDeselectButton = () => {
  const router = useRouter();
  return (
    <Button variant={"secondary"} onClick={() => router.push("/")}>
      <FilterX strokeWidth={1.5} size={20} />
    </Button>
  );
};

export default CategoryDeselectButton;
