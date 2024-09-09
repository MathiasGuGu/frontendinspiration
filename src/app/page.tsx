import { getQueryClient } from "@trpc/react-query/shared";
import PostList from "./_components/Post/PostList";
import { api } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Home({ searchParams }: any) {
  const queryClient = getQueryClient({});
  queryClient.prefetchQuery({
    queryKey: ["allCategories"],
    queryFn: async () => await api.category.get(),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className="flex h-auto w-screen items-center justify-center py-12">
        <div className="w-full max-w-full p-2 md:max-w-[90%] md:p-0">
          <PostList searchParams={searchParams} />
        </div>
      </section>
    </HydrationBoundary>
  );
}
