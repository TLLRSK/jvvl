import React from "react";
import NavUser from "./NavUser";
import NavSearch from "./NavSearch";
import NavCart from "./NavCart";
import NavLinks from "./NavLinks";
import { SignedIn, SignedOut } from "@clerk/nextjs";

function Navbar() {
  return (
    <>
      <SignedIn>
        <NavUser />
        <NavCart />
        <NavSearch />
        <NavLinks />
      </SignedIn>
      
      <SignedOut>
        <NavUser />
        <NavSearch />
        <NavLinks />
      </SignedOut>
    </>
  );
}

export default Navbar;
