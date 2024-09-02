"use server";
import { api } from "@/trpc/server";

type User = {
  username: string;
  clerkId: string;
};

export const user_createUser = async (input: User) => {
  return await api.user.create(input);
};
