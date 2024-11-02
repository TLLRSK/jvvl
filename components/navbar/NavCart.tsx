import CartIcon from "../icons/CartIcon";
import { fetchCartItems } from "@/utils/actions";
import { Button } from "../ui/button";
import Link from "next/link";

async function NavCart() {
  const numItemsInCart = await fetchCartItems();
  return (
    <Button variant="ghost" size="icon" aria-label="cart" className="group relative">
      <Link href="/cart">
        <CartIcon />

        <div className="w-5 h-5 absolute flex justify-center items-center rounded-full -top-1 -right-1
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
