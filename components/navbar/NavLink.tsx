import { NavLinkProps } from "@/utils/types";
import Link from "next/link";
import React from "react";


function NavLink(link: NavLinkProps) {
  return (
    <Link
      href={link.href}
      className="flex items-center gap-2 uppercase w-full"
    >
      <p className="text-xl">{link.label}</p>
    </Link>
  );
}

export default NavLink;
