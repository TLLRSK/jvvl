const NavbarClient = ({ children }: { children: React.ReactNode }) => {

  return (
    <nav
      className="bg-background grid grid-cols-2 items-center justify-center px-4 pt-4 pb-2 fixed top-0 right-0 left-0 z-30 w-full border-b-[1px] border-muted transition-colors
        has-[#cartToggler:checked]:has-[#overlay:not(:checked)]:border-primary
        has-[#cartToggler:not(:checked)]:has-[#overlay:checked]:border-primary
      "
    >
      {children}
    </nav>
  );
};

export default NavbarClient;
