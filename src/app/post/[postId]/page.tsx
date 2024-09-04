"use client";
import { PostsService } from "@/app/_services/PostsService";
import { Globe2, Loader2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

const Page = ({ params }: { params: { postId: string } }) => {
  const { postId } = params;
  const { getPostById, postByIdData: post } = PostsService();

  useEffect(() => {
    getPostById(parseInt(postId));
  }, []);

  return (
    <div className="flex h-auto w-screen items-center justify-center">
      <div className="mt-12 flex h-auto w-full max-w-[70%] flex-col items-center justify-center">
        {!post && <Loader2 className="animate-spin" />}
        {post && (
          <div className="flex w-full flex-col gap-2">
            <h1 className="text-4xl font-medium">{post.title}</h1>

            <section className="relative aspect-video w-full">
              <Image
                src={post.imageUrl ?? ""}
                alt={post.title ?? "Could not find image"}
                fill
                className="rounded-md border bg-zinc-50 object-contain shadow-sm duration-500 hover:cursor-pointer group-hover:scale-[97%]"
              />
            </section>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-2 rounded-full border bg-zinc-50 px-6 py-1 text-xs">
                <Globe2 size={20} strokeWidth={1.5} />
                Live site
              </span>
            </div>
            <div className="mt-2">{post.description}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
