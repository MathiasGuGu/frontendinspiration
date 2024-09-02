"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import React from "react";
import FooterMobile from "./FooterMobile";
import FooterDesktop from "./FooterDesktop";

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <nav className="flex h-16 w-screen items-center justify-center p-2 md:p-0">
      <div className="flex h-full w-full items-center justify-between md:max-w-[90%]">
        {isMobile ? <FooterMobile /> : <FooterDesktop />}
      </div>
    </nav>
  );
};

export default Footer;
