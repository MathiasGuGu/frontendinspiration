"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";
import Marquee from "react-fast-marquee";
import {
  LucideSmile,
  Smile,
  SmileIcon,
  Star,
  WandSparkles,
} from "lucide-react";
const Navbar = () => {
  const isMobile = useIsMobile();

  if (isMobile === undefined) return "";

  return (
    <nav className="flex h-auto min-h-16 w-screen flex-col items-center justify-center md:p-0">
      {/* <div className="relative mb-4 flex h-10 w-full items-center justify-center bg-purple-400 text-purple-900">
        <Marquee gradient={false} speed={15} direction="left">
          <div className="flex items-center space-x-32">
            <p>MORE RESOURCES ARE COMING </p>
            <p>MORE RESOURCES ARE COMING </p>
            <p>MORE RESOURCES ARE COMING </p>
            <p>MORE RESOURCES ARE COMING </p>
          </div>
        </Marquee>
      </div> */}
      <div className="flex h-full w-full items-center justify-between md:max-w-[90%]">
        {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
      </div>
    </nav>
  );
};

export default Navbar;
