import React from "react";
import Link from "next/link";

import NavUser from "./NavUser";
import NavSearch from "./NavSearch";
import NavCart from "./NavCart";
import NavLinks from "./NavLinks";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import NavCartDropdown from "./NavCartTest";

function Navbar() {
  return (
    <>
      <Link href="/" className="h-fit w-fit">
        <h1 className="font-serif font-bold text-xl uppercase">G</h1>
      </Link>

      <div className="flex justify-end gap-3">
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
    </>
  );
}

export default Navbar;
