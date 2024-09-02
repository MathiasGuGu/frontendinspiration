import React from "react";
import NavbarLogo from "./NavbarLogo";
import { Menu } from "lucide-react";
const NavbarMobile = () => {
  return (
    <div className="flex h-16 w-full items-center justify-between px-4">
      <NavbarLogo />
      <div className="flex items-center justify-center gap-2">
        <p>Menu</p>
        <Menu size={24} strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default NavbarMobile;
