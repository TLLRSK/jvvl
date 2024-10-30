"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import DeleteIcon from "../icons/DeleteIcon";
import FormContainer from "../form/FormContainer";
import { removeCartItemAction } from "@/utils/actions";
import { CartItemProduct } from "@/utils/types";
import { formatCurrency } from "@/utils/format";
import { usePathname } from "next/navigation";
import Link from "next/link";

function CartItem(item: CartItemProduct) {
  const { id, size, product } = item;
  const { name, thumbnailImage, price } = product;
  const pathname = usePathname();
  
  return (
    <li
      key={item.id}
      className="bg-background grid grid-cols-2 border-t-[1px] border-muted"
    >
      <Link href={`/products/${id}`} className="w-4/4 aspect-square relative border-r-[1px]">
        <Image
          src={thumbnailImage}
          alt={name}
          fill
          className="object-cover aspect-square"
        />
      </Link>

      <div className="flex flex-col p-3">
        <p className="text-base">{name}</p>
        <p className="text-sm font-semibold">{formatCurrency(price)}</p>
        <p className="opacity-60">Sz: {size}</p>

        <div className="mt-auto ml-auto">
          <FormContainer action={removeCartItemAction}>
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="pathname" value={pathname || "/"} />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              aria-label="delete cart item"
              className="bg-none opacity-60 hover:opacity-100"
            >
              <DeleteIcon />
            </Button>
          </FormContainer>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
