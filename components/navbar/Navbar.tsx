import React from "react";
import Link from "next/link";

import NavUser from "./NavUser";
import NavSearch from "./NavSearch";
import NavCart from "./NavCart";
import NavLinks from "./NavLinks";
import { SignedIn, SignedOut } from "@clerk/nextjs";

function Navbar() {
  return (
    <nav className="grid grid-cols-2 px-4 pt-4 pb-2 bg-background fixed top-0 right-0 left-0 z-30 w-full border-b-[1px] border-muted transition-colors">
      <Link href="/" className="h-fit w-fit">
        <h1 className="font-serif font-bold text-xl uppercase">G</h1>
      </Link>

      <div className="flex justify-end gap-2 ml-auto">
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
