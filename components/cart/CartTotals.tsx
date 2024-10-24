import { CartProps } from "@/utils/types";
import { Cart } from "@prisma/client";
import React from "react";

function CartTotals(cart: Cart) {
  const { cartTotal, shipping, orderTotal} = cart;
  
  if (!cart) {
    return <span>Loading</span>
  }
  return (
    <div className="grid gap-2 mt-auto">
      <Row label="cart total" value={cartTotal} />
      <Row label="shipping" value={shipping} />
      <Row label="order total" value={orderTotal} isLast />
    </div>
  );
}

const Row = ({
  label,
  value,
  isLast = false,
}: {
  label: string;
  value: number;
  isLast?: boolean;
}) => {
  return (
    <div
      className={
        isLast
          ? "flex justify-between border-muted border-b-[1px] pb-2 mt-6 [&>*]:font-semibold"
          : "flex justify-between border-muted border-b-[1px] pb-2"
      }
    >
      <h3 className="capitalize">{label}</h3>
      <p>$ {value}</p>
    </div>
  );
};

export default CartTotals;
