"use client";
import React from "react";
import { SignedIn, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Box, FileStack, Tag } from "lucide-react";
import AdminField from "./AdminField";

const GetUser = async () => {
  const { user } = useUser();
  return (
    <h1 className="text-3xl font-medium underline">
      Welcome back, {user?.username ?? "admin"}
    </h1>
  );
};

const page = ({
  searchParams,
}: {
  searchParams: { choice: "resources" | "categories" | "tech-stacks" };
}) => {
  const { choice } = searchParams;

  return (
    <SignedIn>
      <div className="flex h-auto w-screen flex-col items-center justify-center">
        <div className="flex min-h-[80vh] w-full max-w-[90%] flex-col gap-12 pt-12">
          <section>
            <GetUser />
            <p className="text-zinc-600">What would you like to do today?</p>
          </section>
          <section className="grid grid-cols-1 gap-6 md:grid-cols-5">
            <div className="flex flex-col items-start gap-2 border-r">
              <Link href="/admin?choice=resources">
                <Button variant={"outline"} className="gap-3">
                  <Box size={20} strokeWidth={1.5} />
                  Resources
                </Button>
              </Link>
              <Link href="/admin?choice=categories">
                <Button variant={"outline"} className="gap-3">
                  <Tag size={20} strokeWidth={1.5} />
                  Categories
                </Button>
              </Link>
              <Link href="/admin?choice=tech-stacks">
                <Button variant={"outline"} className="gap-3">
                  <FileStack size={20} strokeWidth={1.5} />
                  Tech-stacks
                </Button>
              </Link>
            </div>
            <div className="col-span-4">
              <AdminField choice={choice} />
            </div>
          </section>
        </div>
      </div>
    </SignedIn>
  );
};

export default page;
