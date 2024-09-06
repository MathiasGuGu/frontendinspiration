import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const PostPagination = ({ totalPages }: { totalPages: number }) => {
  const currentPage = useSearchParams().get("page");

  return (
    <Pagination>
      <PaginationContent>
        {parseInt(currentPage!) > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={currentPage ? `/?page=${parseInt(currentPage) - 1}` : "/"}
            />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href="#">{currentPage}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {parseInt(currentPage!) < totalPages && (
          <PaginationItem>
            <PaginationNext
              href={currentPage ? `/?page=${parseInt(currentPage) + 1}` : "/"}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PostPagination;
