import Cart from "@/components/cart/Cart";
import SectionTitle from "@/components/global/SectionTitle";
import React from "react";

function CartPage() {
  return (
    <section className="min-h-[calc(100dvh-142px)] relative">
      <SectionTitle text="cart" />
      <Cart />
    </section>
  );
}

export default CartPage;
