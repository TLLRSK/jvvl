import React from "react";
import Link from "next/link";

import NavUser from "./NavUser";
import NavSearch from "./NavSearch";
import NavCart from "./NavCart";
import NavLinks from "./NavLinks";
import { SignedIn, SignedOut } from "@clerk/nextjs";

function Navbar() {
  return (
    <nav
      className="w-full grid grid-cols-2 px-3 pt-4 pb-2 bg-background fixed top-0 right-0 
      left-0 border-b-[1px] border-muted transition-colors z-10
    ">
      <Link
        href="/"
        className="h-fit w-fit hover:bg-accent px-3 py-1 rounded-sm"
      >
        <h1 className="font-serif font-bold text-xl uppercase">j</h1>
      </Link>

      <div className="flex justify-end gap-1 ml-auto">
        <SignedIn>
          <NavCart />
          <NavUser />
          <NavSearch />
          <NavLinks />
        </SignedIn>
        <SignedOut>
          <NavUser />
          <NavSearch />
          <NavLinks />
        </SignedOut>
      </div>
    </nav>
  );
}

export default Navbar;
