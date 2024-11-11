"use client";

import { useGlobal } from "@/context/GlobalContext";
import { usePathname } from "next/navigation";

function NavbarClient({ children }: { children: React.ReactNode }) {
  const { loading } = useGlobal();
  const { isInitialLoad, isLoading } = loading;
  const pathname = usePathname();

  const navClasses = () => {
    if (pathname != '/' || isInitialLoad && isLoading) {
      return "translate-y-0 opacity-100";
    }
    if (isInitialLoad && !isLoading) {
      return "-translate-y-[150%] opacity-0";
    }
  };
  return (
    <nav
      className={`w-full flex justify-between pt-4 bg-background pb-2 fixed top-0 right-0 left-0
       border-b-[1px] border-border z-30 [&>button]:mx-auto transition-translate-y ease-custom-bezier duration-1000 delay-1500
       ${navClasses()}`}
    >
      {children}
    </nav>
  );
}

export default NavbarClient;
