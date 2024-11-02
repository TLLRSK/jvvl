import CartIcon from "../icons/CartIcon";
import { fetchCartItems } from "@/utils/actions";
import { Button } from "../ui/button";
import Link from "next/link";

async function NavCart() {
  const numItemsInCart = await fetchCartItems();
  return (
    <Button variant="ghost" size="icon" aria-label="cart" className="group">
      <Link href="/cart" className="relative">
        <CartIcon />

        <div className="w-5 h-5 bg-background absolute flex justify-center items-center rounded-full -top-2 -right-2 border-primary border-2
        group-hover:bg-accent">
          <span className="text-primary font-semibold">
            {numItemsInCart || 0}
          </span>
        </div>

      </Link>
    </Button>
  );
}

export default NavCart;
