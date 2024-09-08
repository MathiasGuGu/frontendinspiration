"use client";
import { PostsService } from "@/app/_services/PostsService";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { FilterX, Loader2 } from "lucide-react";
import Post from "./Post";
import { CategoryService } from "@/app/_services/CategoryService";
import { useFilterStore } from "@/stores/filterStore";
import PostPagination from "../Pagination/PostPagination";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
const PostsList = () => {
  const { userId } = useAuth();
  const { allPosts, isAllPostsLoading } = PostsService();
  const { getAllLikedPosts, allLikedPosts } = PostsService();
  const { getAllCategories } = CategoryService();
  const setFilter = useFilterStore((state) => state.setFilter);
  const filter = useFilterStore((state) => state.filter);
  const setType = useFilterStore((state) => state.setType);
  const type = useFilterStore((state) => state.type);

  return (
    <div className="mt-24 flex h-auto w-full flex-col items-center justify-center">
      <div className="relative flex w-full max-w-[90%] flex-col">
        <section>
          <h1 className="text-balance text-3xl font-bold md:text-4xl">
            Resources
          </h1>
          <p className="text-zinc-500">
            View our list of front-end resources and use them for yourself.
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-12">
            {!getAllCategories &&
              new Array(3)
                .fill(0)
                .map((_, index) => (
                  <Button
                    key={index}
                    variant={"outline"}
                    className="animate-pulse gap-2 px-12"
                  ></Button>
                ))}
            {getAllCategories?.map((category, index) => (
              <Button
                key={index}
                variant={filter === category.id ? "default" : "outline"}
                className="gap-2"
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </Button>
            ))}
            <Button variant={"secondary"} onClick={() => setFilter(undefined)}>
              <FilterX strokeWidth={1.5} size={20} />
            </Button>
          </div>
          {/* <CreatePostDrawer /> */}
          <div className="mb-2 mt-6 border-b">
            <Button
              onClick={() => setType("all")}
              variant={"ghost"}
              className={cn({
                "border border-b-0 bg-zinc-50": type === "all",
                "rounded-none": true,
              })}
            >
              All posts
            </Button>
            <Button
              onClick={() => {
                getAllLikedPosts(userId!);
                setType("liked");
              }}
              variant={"ghost"}
              className={cn({
                "border border-b-0 bg-zinc-50": type === "liked",
                "rounded-none": true,
              })}
            >
              Liked posts
            </Button>
          </div>
        </section>
        <section className="mt-12 grid h-auto grid-cols-1 gap-8 gap-y-16 md:grid-cols-3">
          {isAllPostsLoading && (
            <div className="flex h-64 w-[90vw] items-center justify-center">
              <Loader2 className="animate-spin" />
            </div>
          )}
          {!isAllPostsLoading && allPosts && allPosts.data.length === 0 && (
            <div className="flex h-64 w-[90vw] items-center justify-center">
              Something went wrong, tying again...
            </div>
          )}
          {type == "all" &&
            allPosts?.data?.map((post) => (
              <Post
                key={post.id}
                post={post}
                isLikedByUser={allPosts.isLikedByUser.has(post.id)}
              />
            ))}
          {type == "liked" && !allLikedPosts ? (
            <div className="flex h-64 w-[90vw] items-center justify-center">
              <Loader2 className="animate-spin" />
            </div>
          ) : (
            allLikedPosts?.data?.map((post) => (
              <Post key={post.id} post={post.post} isLikedByUser={true} />
            ))
          )}
        </section>
        <div className="mt-16">
          <PostPagination
            totalPages={
              type == "all" ? allPosts?.totalPages : allLikedPosts?.totalPages
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PostsList;
