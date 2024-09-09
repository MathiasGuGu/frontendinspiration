import { category_getAllCategories } from "@/app/_server/CategoryActions";
import { CategoryService } from "@/app/_services/CategoryService";
import { PostsService } from "@/app/_services/PostsService";
import { Button } from "@/components/ui/button";
import { PostType, type PostsWithCategories } from "@/server/db/schema";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink, Heart, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import PostCategory from "./PostCategory";

const Post = ({
  post,
  isLikedByUser = false,
}: {
  post: PostType;
  isLikedByUser?: boolean;
}) => {
  const [isLiked, setIsLiked] = useState(isLikedByUser);
  const { userId } = useAuth();
  const { likePost } = PostsService();

  return (
    <div key={post.id} className="group relative rounded-lg">
      <PostCategory categoryId={post.categoryId ? post.categoryId : 0} />
      <div className="relative mb-2 aspect-square w-full rounded-lg border-purple-300 bg-purple-50 group-hover:border">
        <Image
          src={post.imageUrl!}
          alt={post.title ?? "Could not find image"}
          fill
          className="z-10 rounded-md border bg-zinc-50 object-contain shadow-sm duration-500 group-hover:scale-[97%]"
        />
      </div>

      <div className="flex flex-col gap-2 px-2 pt-2">
        <div className="relative -space-y-1">
          <h2 className="text-2xl font-bold text-zinc-700">{post.title}</h2>
          <p className="text-sm text-purple-600">{post.description}</p>
        </div>

        <div className="mt-2 flex h-10 items-center justify-start gap-2">
          <Link href={post.link ?? ""} className="">
            <Button variant={"outline"} className="gap-2 text-xs font-light">
              <ExternalLink size={20} strokeWidth={1.5} />
              Go to website
            </Button>
          </Link>
          <Button
            onClick={() => {
              setIsLiked(!isLiked);
              likePost({ id: post.id, clerkId: userId! });
            }}
            variant={"ghost"}
            className="m-0 size-10 p-0"
          >
            <Heart
              size={20}
              strokeWidth={1.5}
              fill={isLiked ? "red" : "transparent"}
              stroke={isLiked ? "red" : "#000"}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Post;
