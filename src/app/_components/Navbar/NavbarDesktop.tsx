import React from "react";
import NavbarLogo from "./NavbarLogo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const NavbarDesktop = () => {
  return (
    <>
      <NavbarLogo />
      <ul className="flex items-center justify-start">
        <Link href="/" className="">
          <Button variant={"link"} size={"sm"}>
            Discover
          </Button>
        </Link>
        {/* <Link href="">
          <Button variant={"link"} size={"sm"}>
            Tech stacks
          </Button>
        </Link>
        <Link href="">
          <Button variant={"link"} size={"sm"}>
            Inspiration
          </Button>
        </Link>
        <Link href="" className="pr-4">
          <Button variant={"link"} size={"sm"}>
            Collections
          </Button>
        </Link> */}
        <div className="flex items-center gap-2 pl-4">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button variant={"outline"} size={"sm"}>
                Sign in
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button size={"sm"}>Sign up</Button>
            </SignUpButton>
          </SignedOut>
        </div>
      </ul>
    </>
  );
};

export default NavbarDesktop;
