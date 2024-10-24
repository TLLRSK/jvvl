import React from "react";
import CartItem from "./CartItem";

function CartItemList(cartItems: any) {
    console.log("cart items: ", cartItems)
  return (
    <ul className="grid gap-4">
      {cartItems.map((item: any) => {
        return <CartItem key={item.id} {...item} />;
      })}
    </ul>
  );
}

export default CartItemList;
