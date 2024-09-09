import { posts_getAllPosts } from "@/app/_server/PostsActions";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import PostListGrid from "./PostListGrid";
import { category_getAllCategories } from "@/app/_server/CategoryActions";
import CategoriesList from "./CategoriesList";
import { getQueryClient } from "@trpc/react-query/shared";
import PostPagination from "../Pagination/PostPagination";

const PostsList = async () => {
  // const setFilter = useFilterStore((state) => state.setFilter);
  // const filter = useFilterStore((state) => state.filter);
  // const setType = useFilterStore((state) => state.setType);
  // const type = useFilterStore((state) => state.type);

  return (
    <div className="mt-24 flex h-auto w-full flex-col items-center justify-center">
      <div className="relative flex w-full max-w-[90%] flex-col">
        <CategoriesList />
        <section className="mt-12 grid h-auto grid-cols-1 gap-8 gap-y-16 md:grid-cols-3">
          <PostListGrid />
        </section>
      </div>
    </div>
  );
};

export default PostsList;
