import PostListGrid from "./PostListGrid";
import CategoriesList from "./CategoriesList";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  useQueryClient,
} from "@tanstack/react-query";
import { category_getAllCategories } from "@/app/_server/CategoryActions";
import { posts_getAllPosts } from "@/app/_server/PostsActions";

const PostsList = async () => {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryKey: ["allPosts"],
    queryFn: () => posts_getAllPosts(undefined, undefined, undefined),
  });
  queryClient.prefetchQuery({
    queryKey: ["allCategories"],
    queryFn: () => category_getAllCategories(),
  });

  return (
    <div className="mt-24 flex h-auto w-full flex-col items-center justify-center">
      <div className="relative flex w-full max-w-[90%] flex-col">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <CategoriesList />
          <section className="mt-12 grid h-auto grid-cols-1 gap-8 gap-y-16 md:grid-cols-3">
            <PostListGrid />
          </section>
        </HydrationBoundary>
      </div>
    </div>
  );
};

export default PostsList;
