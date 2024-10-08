import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
const Clerk = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default Clerk;
