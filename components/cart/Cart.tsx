import { SubmitButton } from "../form/Buttons";
import CartTotals from "./CartTotals";
import {
  createOrderAction,
  fetchOrCreateCart,
  updateCart,
} from "@/utils/actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import FormContainer from "../form/FormContainer";
import CartItemList from "./CartItemList";

async function Cart() {
  const { userId } = auth();
  if (!userId) redirect("/");
  const previousCart = await fetchOrCreateCart({ userId });
  const { currentCart, cartItems } = await updateCart(previousCart);

  if (cartItems.length === 0) {
    return (
      <article>
        <p className="mt-12 text-center">Your cart is currently empty.</p>
      </article>
    );
  }

  return (
    <article className="flex-1 flex flex-col">
      <div className="flex-1 grid lg:grid-cols-2 gap-6 lg:gap-0 lg:mb-24">
        <CartItemList cartItems={cartItems} />

        <div className="flex relative border-muted lg:border-r-[1px] lg:border-b-[1px]">
          <div className="w-full flex flex-col p-3 h-[calc(100dvh-198px)]  
            lg:h-fit lg:p-6 lg:sticky lg:top-[114px] lg:bottom-auto
          "
          >
            <CartTotals {...currentCart} />

            <form action={createOrderAction}>
              <SubmitButton
                text="place order"
                className="uppercase text-xl w-full mt-6 lg:mt-16"
              />
            </form>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Cart;
