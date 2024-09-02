import { HydrateClient } from "@/trpc/server";
import PostsList from "./_components/Posts/PostsList";

export default async function Home() {
  return (
    <HydrateClient>
      <PostsList />
    </HydrateClient>
  );
}
