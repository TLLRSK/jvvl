import { fetchCartItems } from "@/utils/actions";
import { Button } from "../ui/button";
import Link from "next/link";

async function NavCart() {
  const numItemsInCart = await fetchCartItems();
  return (
      <Button
          variant="ghost"
          size="sm"
          aria-label="cart"
          className="flex gap-4 max-w-[100px] text-sm uppercase"
        >
          <Link href="/cart" className="text-sm uppercase">
        cart ({numItemsInCart || 0})

      </Link>
        </Button>
  );
}

export default NavCart;
