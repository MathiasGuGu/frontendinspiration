import { Button } from "@/components/ui/button";
import { type PostType } from "@/server/db/schema";
import Image from "next/image";

const Post = ({ post }: { post: PostType }) => {
  return (
    <div className="h-[400px] w-full">
      <Image
        src={post.imageUrl!}
        alt={post.title ?? "Could not find image"}
        height={899}
        width={924}
        priority
        className="h-2/3 rounded border border-zinc-100 bg-zinc-50 object-contain"
      />
      <div className="flex flex-col gap-2 px-2 pt-4">
        <div className="relative -space-y-1">
          <h2 className="text-2xl font-bold text-zinc-800">{post.title}</h2>
          <p className="text-sm text-zinc-500">{post.description}</p>
        </div>

        <div className="mt-2 flex h-10 items-center justify-start gap-2">
          <Button
            variant={"outline"}
            size={"sm"}
            className="bg-transparent px-2 text-sm font-normal text-zinc-600"
          >
            Go to website
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Post;
