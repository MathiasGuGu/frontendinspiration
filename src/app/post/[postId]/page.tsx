"use client";
import { PostsService } from "@/app/_services/PostsService";
import Image from "next/image";
import React, { useEffect } from "react";

const page = ({ params }: { params: { postId: string } }) => {
  const { postId } = params;
  const { getPostById, postByIdData: post } = PostsService();

  useEffect(() => {
    getPostById(parseInt(postId));
  }, []);

  if (!postId) return <div>No post found with that id</div>;
  if (!post) return <div>Loading...</div>;

  return (
    <div className="flex h-auto w-screen items-center justify-center">
      <div className="mt-12 flex h-auto w-full max-w-[70%] flex-col">
        <section className="relative aspect-video w-full">
          <Image
            src={post.imageUrl ?? ""}
            alt={post.title ?? "Could not find image"}
            fill
            className="rounded-md border bg-zinc-50 object-contain shadow-sm duration-500 hover:cursor-pointer group-hover:scale-[97%]"
          />
        </section>
        <div className="flex items-center gap-2">
          <span>UX</span>
          <span>Live site</span>
        </div>
        <h1 className="text-4xl font-medium">{post.title}</h1>
      </div>
    </div>
  );
};

export default page;
