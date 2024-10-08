import React from "react";
import Link from "next/link";
import Container from "../global/Container";
import NavUser from "./NavUser";
import NavSearch from "./NavSearch";
import NavCart from "./NavCart";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <nav className="bg-background px-3 py-1 border-b-[1px] border-foreground fixed top-0 right-0 left-0 z-30 w-full">
      <Container className="grid grid-cols-2 items-center justify-center max-w-screen-xl mx-auto">
        <Link href="/" className="h-fit">
          <h1 className="font-serif font-bold text-xl uppercase text-foreground">
            G
          </h1>
        </Link>

        <div className="flex justify-end gap-3">
          <NavCart />
          <NavUser />
          <NavSearch />
          <NavLinks />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;