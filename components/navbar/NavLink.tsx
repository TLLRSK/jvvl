import { NavLinkProps } from "@/utils/types";
import Link from "next/link";
import React from "react";


function NavLink(link: NavLinkProps, i: number) {
  return (
    <Link
      href={link.href}
      className="flex items-center gap-2 uppercase w-full text-lg"
    >
      <span className="text-sm">{i}.</span>
      {link.label}
    </Link>
  );
}

export default NavLink;
