"use client";

import { useLoading } from "@/context/LoadingContext";
import { usePathname } from "next/navigation";

function NavbarClient({ children }: { children: React.ReactNode }) {
  const { isInitialLoad, isLoading } = useLoading();
  const pathname = usePathname();

  const navClasses = () => {
    if (pathname != '/' || isInitialLoad && isLoading) {
      return "translate-y-0";
    }
    if (isInitialLoad && !isLoading) {
      return "-translate-y-[150%]";
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
