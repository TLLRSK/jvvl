import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { LinkType } from "@/utils/types";

function LinksDropdown({
    icon,
    links,
} : {
    icon: React.ReactNode,
    links: LinkType[]
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size='icon' className="flex">
          {icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50" align="start" sideOffset={6}>
        <DropdownMenuGroup>
          {links.map((link) => {
            return (
              <DropdownMenuItem key={link.href}>
                <Link href={link.href} className="capitalize w-full text-lg">
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
