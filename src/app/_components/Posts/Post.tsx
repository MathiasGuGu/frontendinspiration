import { CategoryService } from "@/app/_services/CategoryService";
import { PostsService } from "@/app/_services/PostsService";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import { ExternalLink, Heart, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Post = ({ post }: { post: any }) => {
  const { userId } = useAuth();
  const { getAllCategories } = CategoryService();
  const { likePost } = PostsService();
  return (
    <div key={post.id} className="group relative rounded-lg">
      <div className="absolute -top-3 left-2 z-20 rounded-lg border border-zinc-400 bg-white px-3 py-1 text-xs font-medium text-zinc-600">
        {!getAllCategories && "Loading..."}
        {
          getAllCategories?.find((category) => category.id === post.categoryId)
            ?.name
        }
      </div>
      <div className="relative aspect-square w-full rounded-lg border-purple-300 bg-purple-50 group-hover:border">
        <Image
          src={post.imageUrl!}
          alt={post.title ?? "Could not find image"}
          fill
          className="z-10 rounded-md border bg-zinc-50 object-contain shadow-sm duration-500 group-hover:scale-[97%]"
        />
      </div>
      <div className="flex flex-col gap-2 px-2 py-4">
        <div className="relative -space-y-1">
          <h2 className="text-2xl font-bold text-zinc-700">{post.title}</h2>
          <p className="text-sm text-purple-600">{post.description}</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          {/* <Button
            onClick={() => {
              likePost({ id: post.id, clerkId: userId! });
            }}
            variant={"ghost"}
            className="m-0 size-10 p-0"
          >
            <Heart size={20} strokeWidth={1.5} />
          </Button> */}

          <Link href={post.link ?? ""}>
            <Button variant={"ghost"} className="m-0 size-10 px-0">
              <ExternalLink size={20} strokeWidth={1.5} />
            </Button>
          </Link>

          {/* <Button variant={"ghost"} className="m-0 size-10 px-0">
            <Share2 size={20} strokeWidth={1.5} />
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Post;
