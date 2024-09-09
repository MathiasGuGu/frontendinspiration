"use client";
import { category_getAllCategories } from "@/app/_server/CategoryActions";
import { posts_getAllPosts } from "@/app/_server/PostsActions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React from "react";

const queryClient = new QueryClient();

const QueryProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  queryClient.prefetchQuery({
    queryKey: ["allPosts"],
    queryFn: () => posts_getAllPosts(undefined, undefined, undefined),
  });
  queryClient.prefetchQuery({
    queryKey: ["allCategories"],
    queryFn: () => category_getAllCategories(),
  });
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {children}
      </HydrationBoundary>
    </QueryClientProvider>
  );
};

export default QueryProvider;
