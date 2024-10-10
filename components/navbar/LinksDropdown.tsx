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
import { NavLink } from "@/utils/types";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

function LinksDropdown({
  icon,
  links,
}: {
  icon: React.ReactNode;
  links: NavLink[];
}) {
  const { userId } = auth();
  const isAdmin = userId === process.env.ADMIN_USER_ID;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="flex">
          {icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50" align="start" sideOffset={6}>
        <DropdownMenuGroup>
          <SignedOut>
            {links.map((link, i) => {
              if (link.label === "dashboard") return null;
              return (
                <DropdownMenuItem key={i}>
                  <Link href={link.href} className="uppercase w-full text-lg">
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </SignedOut>
          <SignedIn>
            {links.map((link, i) => {
              if (!isAdmin && link.label === "dashboard") return null;
              return (
                <>
                  { link.label === "dashboard" ? <DropdownMenuSeparator /> : null}
                  <DropdownMenuItem key={i}>
                    <Link href={link.href} className="uppercase w-full text-lg">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                </>
              );
            })}
          </SignedIn>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
