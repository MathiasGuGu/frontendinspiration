import { Button } from "@/components/ui/button";
import Link from "next/link";

const PostLink = () => {
  return (
    <Link href={""}>
      <Button
        variant={"outline"}
        size={"sm"}
        className="bg-transparent px-2 text-sm font-normal text-zinc-600"
      >
        Go to website
      </Button>
    </Link>
  );
};

export default PostLink;
