"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
import { useAuth } from "@clerk/nextjs";
import { Bookmark, BookMarked } from "lucide-react";
import { useState } from "react";
import { SignedIn } from "@clerk/nextjs";

const PostSave = ({
  isSaved,
  postId,
}: {
  isSaved: boolean | undefined;
  postId: number;
}) => {
  const [saved, setSaved] = useState(isSaved);
  const { userId } = useAuth();

  const likePostMutation = api.post.likePost.useMutation({
    onMutate: () => {
      setSaved((prev) => !prev);
    },
    onSuccess: () => {
      setSaved((prev) => prev);
    },
    onError: () => {
      setSaved((prev) => !prev);
    },
  });
  return (
    <SignedIn>
      <Button
        onClick={() =>
          likePostMutation.mutate({ postId: postId, clerkId: userId! })
        }
        variant={"ghost"}
        className="m-0 size-10 p-0"
      >
        <Bookmark
          strokeWidth={1.5}
          size={18}
          className={cn({
            ["fill-purple-500 stroke-purple-500"]: saved,
          })}
        />
      </Button>
    </SignedIn>
  );
};

export default PostSave;
