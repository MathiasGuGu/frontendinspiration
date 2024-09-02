import { useMutation } from "@tanstack/react-query";
import React from "react";
import { user_createUser } from "../_server/UserActions";

const UserService = () => {
  const { mutate: createUser } = useMutation({
    mutationKey: ["user_createUser"],
    mutationFn: ({
      username,
      clerkId,
    }: {
      username: string;
      clerkId: string;
    }) => user_createUser({ username, clerkId }),
  });

  return {
    createUser,
  };
};

export default UserService;
