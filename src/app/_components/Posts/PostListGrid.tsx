import Post from "./Post";
import { api } from "@/trpc/server";

const PostListGrid = async () => {
  const { data } = await api.post.getAll({});

  if (data) {
    return (
      <>
        <>{data?.map((post) => <Post key={post.id} post={post} />)}</>
      </>
    );
  }
};

export default PostListGrid;
