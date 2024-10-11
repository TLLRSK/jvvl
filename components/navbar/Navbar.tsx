import React from "react";
import Link from "next/link";

import NavUser from "./NavUser";
import NavSearch from "./NavSearch";
import NavCart from "./NavCart";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <>
      <Link href="/" className="h-fit w-fit">
        <h1 className="font-serif font-bold text-xl uppercase">
          G
        </h1>
      </Link>

      <div className="flex justify-end gap-3">
        <NavCart />
        <NavUser />
        <NavSearch />
        <NavLinks />
      </div>
    </>
  );
}

export default Navbar;
