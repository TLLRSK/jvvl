import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import CartIcon from "../icons/CartIcon";
import { fetchCartItems } from "@/utils/actions";
import { Button } from "../ui/button";
import { DropdownMenuContent } from "../ui/dropdown-menu";
import Cart from "../cart/Cart";

async function NavCart() {
  const numItemsInCart = await fetchCartItems();
  return (
    <DropdownMenu>

      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="flex gap-4 max-w-[100px]"
        >
          <CartIcon />
          <div className="w-5 h-5 absolute flex bg-foreground rounded-full content-center -top-2 -right-2">
          <span className="text-secondary font-semibold leading-auto mx-auto">
            {numItemsInCart || 0}
          </span>
        </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-[100vw] md:w-[calc(33vw)] sm:mr-[19px] p-4 border-b-secondary"
        align="start"
        sideOffset={10}
      >
        <Cart/>
      </DropdownMenuContent>
      
    </DropdownMenu>
  );
}

export default NavCart;
