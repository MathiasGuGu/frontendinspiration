"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

const Navbar = () => {
  const isMobile = useIsMobile();

  if (isMobile === undefined) return "";

  return (
    <nav className="flex h-auto min-h-16 w-screen flex-col items-center justify-center md:p-0">
      <div className="flex h-full w-full items-center justify-between md:max-w-[90%]">
        {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
      </div>
    </nav>
  );
};

export default Navbar;
