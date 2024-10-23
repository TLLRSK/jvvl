"use client";
import { CartProps } from "@/utils/types";
import { SubmitButton } from "../form/Buttons";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

function Cart({ cart, isOpen }: { cart: CartProps | null; isOpen: boolean }) {
  return (
    <section className={`absolute flex flex-col bg-background min-h-[calc(100dvh-61px)] px-4 py-3 top-[61px] right-0 w-full border-primary md:w-2/4 md:border-l-[1px] lg:w-1/3 xl:w-1/4 ${
      isOpen 
        ? "translate-x-0"
        : "translate-x-full"
    }`}>
      <h2 className="font-serif text-lg">Cart</h2>

      { cart ? (
        <article className="flex-1 flex flex-col">
        <ul className="grid gap-4">
          {cart.cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </ul>

        <CartTotals {...cart} />

        <form onSubmit={() => console.log("hola")} className="p-6 mt-2">
          <SubmitButton
            text="place order"
            className="uppercase text-xl w-full"
          />
        </form>
      </article>
      ) : (
        <p>Your cart is currently empty.</p>
      )}
    </section>
  );
}

export default Cart;
