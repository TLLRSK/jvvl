
"use client";
import { NavLinkProps } from "@/utils/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


function NavLink(link: NavLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      href={link.href}
      className={`flex items-center gap-2 uppercase w-full ${pathname === link.href ? "font-semibold" : "font-regular"}`}
    >
      <p className="text-sm"> {pathname === link.href ? `> ${link.label}` : link.label}</p>
    </Link>
  );
}

export default NavLink;
