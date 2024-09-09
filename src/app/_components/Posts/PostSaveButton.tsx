import { Button } from "@/components/ui/button";
import { Bookmark, Save } from "lucide-react";
import React from "react";

const PostSaveButton = () => {
  return (
    <Button variant={"ghost"} className="m-0 size-10 p-0">
      <Bookmark strokeWidth={1.5} size={18} />
    </Button>
  );
};

export default PostSaveButton;
