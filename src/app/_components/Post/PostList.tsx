import { api } from "@/trpc/server";
import Post from "./Post";
import { getAllPosts } from "@/queries/query";
import { auth } from "@clerk/nextjs/server";

const PostList = async ({
  searchParams,
}: {
  searchParams: { page: string; category: string };
}) => {
  const { userId } = await auth();
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  let allLikedPosts: any = undefined;
  if (userId) {
    allLikedPosts = await api.post.getAllLiked({
      userId: userId!,
    });
  }
  const categoryId = searchParams.category
    ? parseInt(searchParams.category)
    : undefined;
  const data = await getAllPosts({
    page,
    categoryId,
  });
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-3">
      {data?.data.map((post) => (
        <Post
          key={post.id}
          post={post}
          isSaved={
            allLikedPosts
              ? allLikedPosts.data?.some(
                  (likedPost: any) => likedPost.post?.id === post.id,
                )
              : false
          }
        />
      ))}
    </div>
  );
};

export default PostList;
