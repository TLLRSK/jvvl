import { CartItemProduct } from "@/utils/types";
import React from "react";
import CartItem from "./CartItem";

function CartItemList({ cartItems }: {cartItems: CartItemProduct[]}) {
  return (
    <ul className="
      flex flex-col relative 
      md:border-r-[1px] md:border-l-[1px]
      [&>li:nth-last-child(1)]:border-b-[1px] [&>li:nth-child(1)]:border-t-0
      [&>li:nth-child(1)]:top-[114px] lg:[&>li:nth-child(1)]:top-auto
    ">
      {cartItems?.map((item: CartItemProduct) => {
        return <CartItem key={item.id} {...item} />;
      })}
    </ul>
  );
}

export default CartItemList;
