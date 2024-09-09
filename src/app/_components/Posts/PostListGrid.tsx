"use client";
import { posts_getAllPosts } from "@/app/_server/PostsActions";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import Post from "./Post";
import PostPagination from "../Pagination/PostPagination";
import { useFilterStore } from "@/stores/filterStore";

const PostListGrid = () => {
  const params = useSearchParams();
  const paramFilter = params.get("filter");
  const paramPage = params.get("page");

  const { data, isLoading, error } = useQuery({
    queryKey: ["allPosts", paramFilter, paramPage],
    queryFn: async () =>
      await posts_getAllPosts(
        paramFilter ? parseInt(paramFilter) : undefined,
        paramPage ? parseInt(paramPage) : 1,
        undefined,
      ),
  });

  const filtered = useMemo(() => {
    return data?.data;
  }, [data, paramFilter]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (data) {
    return (
      <>
        <>{filtered?.map((post) => <Post key={post.id} post={post} />)}</>
        {/* <PostPagination totalPages={data.totalPages} /> */}
      </>
    );
  }
};

export default PostListGrid;
