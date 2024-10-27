import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { signedInLinks, signedOutLinks } from "@/utils/links";
import { Fragment } from "react";
import NavLink from "./NavLink";

function LinksDropdown({ icon }: { icon: React.ReactNode }) {
  const { userId } = auth();
  const isAdmin = userId === process.env.ADMIN_USER_ID;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="flex">
          {icon}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-50 md:mr-[17px]" align="start" sideOffset={9}>
        <DropdownMenuGroup>
          <SignedOut>
            {signedOutLinks.map((link, i) => {
              if (link.label === "dashboard") return null;
              return (
                <DropdownMenuItem key={i}>
                  <NavLink {...link} i={i} />
                </DropdownMenuItem>
              );
            })}
          </SignedOut>

          <SignedIn>
            {signedInLinks.map((link, i) => {
              if (!isAdmin && link.label === "dashboard") return null;
              return (
                <Fragment key={i}>
                  {link.label === "dashboard" ? (
                    <DropdownMenuSeparator />
                  ) : null}
                  <DropdownMenuItem key={i}>
                    <Link href={link.href} className="flex items-center gap-2 uppercase w-full text-lg">
                      <span className="text-sm">{i}.</span>
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                </Fragment>
              );
            })}
          </SignedIn>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
