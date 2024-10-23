"use client";

import React, { useState, useEffect } from "react";

const NavbarClient = ({ children }: { children: React.ReactNode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`
    grid grid-cols-2 items-center justify-center px-4 pt-4 pb-2 fixed top-0 right-0 left-0 z-30 w-full border-b-[1px] border-primary 
    ${
      scrolled
        ? "bg-background [&>*]:text-foreground"
        : "bg-background [&>*]:text-foreground"
    }
    `}
    >
      {children}
    </nav>
  );
};

export default NavbarClient;
