"use client";
import { useEffect, useRef, useState } from "react";

const MOBILE_BREAKPOINT = 768; // smallest size for desktop, less is mobile.

export const useIsMobile = () => {
  const isInitialLoad = useRef(true);
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (isInitialLoad.current) {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      isInitialLoad.current = false;
    }

    const handleResize = () => {
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
