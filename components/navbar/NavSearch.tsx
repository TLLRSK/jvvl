import SearchIcon from "../icons/SearchIcon";
import { Input } from "../ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";

function NavSearch() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size='icon' className="flex gap-4 max-w-[100px]">
          <SearchIcon className="text-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[100vw] md:w-[calc(33vw)] sm:mr-[19px] p-3 border-b-secondary" align="start" sideOffset={6}>
        <Input 
          type='search' 
          placeholder='Search a product...' 
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavSearch;
