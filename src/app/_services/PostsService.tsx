"use client";
import {
  posts_createNewPost,
  posts_deletePost,
  posts_getAllPosts,
  posts_getPostById,
  posts_likePost,
  posts_updatePost,
} from "@/app/_server/PostsActions";
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { useFilterStore } from "../../stores/filterStore";

export const PostsService = () => {
  const filter = useFilterStore((state) => state.filter);

  const {
    data: allPosts,
    isLoading: isAllPostsLoading,
    isError: isAllPostsError,
    refetch: refetchAllPosts,
  } = useQuery({
    queryKey: ["posts_getAllPosts", filter],
    queryFn: () => posts_getAllPosts(filter),
  });

  const { mutate: likePost } = useMutation({
    mutationFn: ({ id, clerkId }: { id: number; clerkId: string }) =>
      posts_likePost({ id, clerkId }),
    mutationKey: ["posts_likePost"],
  });

  const {
    mutate: createNewPost,
    isPending: isCreateNewPostPending,
    isError: isCreateNewPostError,
  } = useMutation({
    mutationFn: ({
      imageUrl,
      title,
      description,
      link,
    }: {
      imageUrl: string;
      title: string;
      description: string;
      link: string;
    }) => posts_createNewPost({ title, description, link, imageUrl }),
    mutationKey: ["posts_createNewPost"],
    onSuccess: () => refetchAllPosts(),
  });

  const { mutate: getPostById, data: postByIdData } = useMutation({
    mutationKey: ["posts_getPostById"],
    mutationFn: (id: number) => posts_getPostById(id),
  });

  return {
    createNewPost,
    likePost,
    getPostById,
    postByIdData,
    isCreateNewPostPending,
    isCreateNewPostError,
    allPosts,
    isAllPostsLoading,
    isAllPostsError,
  };
};
