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
import UserIcon from "../icons/UserIcon";
import { userLinks } from "@/utils/links";

function NavUser() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="flex gap-4 max-w-[100px]"
        >
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start" sideOffset={6}>
        <SignedOut>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <SignInButton mode="modal">
                <button className="w-full text-lg text-left uppercase">
                  Login
                </button>
              </SignInButton>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
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
            {userLinks.map((link) => {
              return (
                <DropdownMenuItem key={link.label}>
                  <Link
                    href={link.href}
                    className="w-full text-lg text-left uppercase"
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              );
            })}
            <DropdownMenuSeparator />
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
