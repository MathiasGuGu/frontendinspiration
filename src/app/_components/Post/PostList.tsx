import Post from "./Post";
import { getAllPosts } from "@/queries/query";

const PostList = async ({
  searchParams,
}: {
  searchParams: { page: string; category: string };
}) => {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const categoryId = searchParams.category
    ? parseInt(searchParams.category)
    : 0;
  const data = await getAllPosts({
    page,
    categoryId,
  });
  return (
    <div className="grid grid-cols-3 gap-x-8 gap-y-4">
      {data?.data.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default PostList;
