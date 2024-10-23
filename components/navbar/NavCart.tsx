"use client";
import { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import CartIcon from "../icons/CartIcon";
import { Button } from "../ui/button";
import { CartProps } from "@/utils/types";

function NavCart() {
  const [cart, setCart] = useState<CartProps | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const switchIsOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    console.log("cart: ", cart)
  };

  const fetchCart = async () => {
    try {
      const response = await fetch("/api/cart");
      if (!response.ok) throw new Error("Failed to fetch cart");
      const data = await response.json();
      setCart(data);

    } catch (error) {
      if (error instanceof Error) {
        throw new Error("Failed to fetch cart", error);
      } else {
        throw new Error("Failed to fetch cart");
      }
    }
  };

  useEffect(() => {
      fetchCart();
  }, []);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="relative"
        onClick={switchIsOpen}
      >
        <CartIcon />
        <div className="w-5 h-5 absolute bg-foreground rounded-full content-center -top-2 -right-2">
          <span className="text-secondary font-semibold leading-auto">
            {cart?.numItemsInCart || 0}
          </span>
        </div>
      </Button>
      
      <Cart isOpen={isOpen} cart={cart} />
    </>
  );
}

export default NavCart;
