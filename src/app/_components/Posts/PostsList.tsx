"use client";
import { PostsService } from "@/app/_services/PostsService";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  Boxes,
  FilterX,
  Loader,
  Loader2,
  LoaderCircle,
  Star,
} from "lucide-react";
import Post from "./Post";
import { CategoryService } from "@/app/_services/CategoryService";
import { useFilterStore } from "@/stores/filterStore";
const PostsList = () => {
  const { allPosts, isAllPostsLoading } = PostsService();
  const { getAllCategories } = CategoryService();
  const setFilter = useFilterStore((state) => state.setFilter);
  const filter = useFilterStore((state) => state.filter);
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
                    variant={"outline"}
                    className="animate-pulse gap-2 px-12"
                  ></Button>
                ))}
            {getAllCategories?.map((category) => (
              <Button
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
        </section>
        <section className="mt-12 grid h-auto grid-cols-1 gap-8 md:grid-cols-3">
          {isAllPostsLoading && (
            <div className="flex h-64 w-[90vw] items-center justify-center">
              <Loader2 className="animate-spin" />
            </div>
          )}
          {!isAllPostsLoading && allPosts && allPosts.length === 0 && (
            <div className="flex h-64 w-[90vw] items-center justify-center">
              Something went wrong, tying again...
            </div>
          )}
          {allPosts?.map((post) => <Post key={post.id} post={post} />)}
        </section>
      </div>
    </div>
  );
};

export default PostsList;
