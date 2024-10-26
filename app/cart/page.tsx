import Cart from "@/components/cart/Cart";
import Container from "@/components/global/Container";
import React from "react";

function CartPage() {
  return (
    <section className="min-h-[calc(100dvh-142px)] relative">
      <h2 className="
        bg-background px-3 py-2 text-center uppercase text-sm border-muted border-b-[1px]
        sticky top-[61px] z-20
      ">
        your cart
        </h2>
      <Container>
        <Cart />
      </Container>
    </section>
  );
}

export default CartPage;
