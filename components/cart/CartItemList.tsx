import { CartItemProduct } from "@/utils/types";
import React from "react";
import CartItem from "./CartItem";

function CartItemList({ cartItems }: {cartItems: CartItemProduct[]}) {
  return (
    <ul className="grid gap-4">
      {cartItems.map((item: CartItemProduct) => {
        return <CartItem key={item.id} {...item} />;
      })}
    </ul>
  );
}

export default CartItemList;
