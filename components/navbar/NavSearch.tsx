"use client";
import SearchIcon from "../icons/SearchIcon";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

function NavSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || ""
  );
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`/products?${params.toString()}`);
  }, 500);

  useEffect(() => {
    if (!searchParams.get("search")) {
      setSearch("");
    }
  }, [searchParams.get("search")]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="flex gap-4 max-w-[100px]"
        >
          <SearchIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[100vw] md:w-[calc(33vw)] sm:mr-[19px] p-3 border-b-secondary"
        align="start"
        sideOffset={6}
      >
        <Input
          type="search"
          placeholder="Search a product..."
          onChange={(e) => {
            setSearch(e.target.value);
            handleSearch(e.target.value);
          }}
          value={search}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavSearch;
