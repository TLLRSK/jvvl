import CartIcon from "../icons/CartIcon";
import { fetchCartItems } from "@/utils/actions";
import { Button } from "../ui/button";
import Link from "next/link";

async function NavCart() {
  const numItemsInCart = await fetchCartItems();
  return (
    <Button variant="ghost" size="icon" aria-label="cart">
      <Link href="/cart" className="relative">
        <CartIcon />

        <div className="w-5 h-5 absolute flex bg-foreground rounded-full content-center -top-2 -right-2">
          <span className="text-secondary font-semibold leading-auto mx-auto">
            {numItemsInCart || 0}
          </span>
        </div>

      </Link>
    </Button>
  );
}

export default NavCart;
