import React from "react";
import NavUser from "./NavUser";
import NavSearch from "./NavSearch";
import NavCart from "./NavCart";
import NavLinks from "./NavLinks";
import { SignedIn, SignedOut } from "@clerk/nextjs";

function Navbar() {
  return (
    <nav
      className="w-full grid grid-cols-4 pt-4 bg-background pb-2 fixed top-0 right-0 left-0
       border-b-[1px] border-muted transition-colors z-30
       [&>button]:mx-auto
    "
    >
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
    </nav>
  );
}

export default Navbar;
