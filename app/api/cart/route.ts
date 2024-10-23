import { NextResponse } from "next/server";

import { fetchOrCreateCart, getAuthUser } from "@/utils/actions";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const user = await getAuthUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const cart = await fetchOrCreateCart({ userId: user.id });

    const cartResponse = {
      id: cart.id,
      numItemsInCart: cart.numItemsInCart,
      cartTotal: cart.cartTotal,
      shipping: cart.shipping,
      orderTotal: cart.orderTotal,
      cartItems: cart.cartItems.map((item) => ({
        id: item.id,
        size: item.size,
        product: {
          id: item.product.id,
          name: item.product.name,
          price: item.product.price,
          image: item.product.thumbnailImage,
        },
      })),
    };
    return NextResponse.json(cartResponse);
  } catch (error) {
    console.log(error);
    return NextResponse.json(null, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
