import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import SignOutLink from "./SignOutLink";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import { userLinks } from "@/utils/links";

function NavUser() {
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          aria-label="user"
          className="flex gap-4 max-w-[100px] text-sm uppercase"
        >
          user
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[calc(50vw+1px)] md:w-[calc(25vw-3px)]" align="center" sideOffset={9}>

        <SignedOut>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <SignInButton mode="modal">
                <button className="w-full text-lg text-left uppercase">
                  Login
                </button>
              </SignInButton>

            </DropdownMenuItem>
            <DropdownMenuSeparator className="my-3" />
            <DropdownMenuItem>

              <SignUpButton mode="modal">
                <button className="w-full text-lg text-left uppercase">
                  Register
                </button>
              </SignUpButton>

            </DropdownMenuItem>
          </DropdownMenuGroup>
        </SignedOut>

        <SignedIn>
          <DropdownMenuGroup>
            {userLinks.map((link, index) => {
              return (
                <DropdownMenuItem key={index}>
                  <Link
                    href={link.href}
                    className="w-full text-lg text-left uppercase"
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              );
            })}
            <DropdownMenuSeparator className="my-3" />

            <DropdownMenuItem>
              <SignOutLink />
            </DropdownMenuItem>

          </DropdownMenuGroup>
        </SignedIn>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavUser;
