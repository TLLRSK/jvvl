"use client";
import { dashboardLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

function AdminSidebar() {
  const pathname = usePathname();
  
  return (
    <aside className="flex lg:flex-col gap-4">
      {dashboardLinks.map((link, i) => {
        const isActivePage = link.href === pathname;
        const variant = isActivePage ? "default" : "outline";
        return (
          <Button variant={variant} key={i} aria-label={link.label}>
            <Link href={link.href} className="text-left capitalize text-lg">
              {link.label}
            </Link>
          </Button>
        );
      })}
    </aside>
  );
}

export default AdminSidebar;
