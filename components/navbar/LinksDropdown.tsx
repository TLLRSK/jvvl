import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { signedInLinks, signedOutLinks } from "@/utils/links";
import { Fragment } from "react";
import NavLink from "./NavLink";

async function LinksDropdown({ icon }: { icon: React.ReactNode }) {
  const { userId } = await auth();
  const isAdmin = userId === process.env.ADMIN_USER_ID;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="show links" className="flex">
          {icon}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-[calc(50vw+1px)] md:w-[calc(25vw-3px)] md:mr-[17px]"
        align="start"
        sideOffset={9}
      >
        <DropdownMenuGroup>
          <SignedOut>
            {signedOutLinks.map((link, index) => {
              if (link.label === "dashboard") return null;
              return (
                <DropdownMenuItem key={index}>
                  <NavLink {...link}/>
                </DropdownMenuItem>
              );
            })}
          </SignedOut>

          <SignedIn>
            {signedInLinks.map((link, index) => {
              if (!isAdmin && link.label === "dashboard") return null;
              return (
                <Fragment key={index}>
                  {link.label === "dashboard" ? (
                    <DropdownMenuSeparator className="my-3"/>
                  ) : null}
                  <DropdownMenuItem key={index}>
                    <NavLink {...link} />
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
