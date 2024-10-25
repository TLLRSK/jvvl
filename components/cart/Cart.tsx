import { SubmitButton } from "../form/Buttons";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import {
  createOrderAction,
  fetchOrCreateCart,
  updateCart,
} from "@/utils/actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import FormContainer from "../form/FormContainer";

async function Cart() {
  const { userId } = auth();
  if (!userId) redirect("/");
  const previousCart = await fetchOrCreateCart({ userId });
  const { currentCart, cartItems } = await updateCart(previousCart);

  if (cartItems.length === 0) {
    return (
      <section className={cartClasses}>
        <h2 className="font-serif text-lg">Cart</h2>

        <article className="flex-1 flex flex-col">
          <p>Your cart is currently empty.</p>
        </article>
      </section>
    );
  }

  return (
    <section className={cartClasses}>
      <h2 className="font-serif text-lg">Cart</h2>

      <article className="flex-1 flex flex-col">
        <ul className="grid gap-4">
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </ul>

        <CartTotals {...currentCart} />

        <FormContainer action={createOrderAction}>
          <SubmitButton
            text="place order"
            className="uppercase text-xl w-full"
          />
        </FormContainer>
      </article>
    </section>
  );
}

const cartClasses = "min-h-[calc(100dvh-61px)] flex-1 flex flex-col bg-background px-4 py-3 border-primary md:border-l-[1px]";

export default Cart;
