import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import DeleteIcon from "../icons/DeleteIcon";
import FormContainer from "../form/FormContainer";
import { removeCartItemAction } from "@/utils/actions";
import { CartItemProps, Product } from "@/utils/types";

function CartItem(item: CartItemProps) {
  const { id, size, product } = item;
  const { name, thumbnailImage, price } = product as Product;
  
  return (
    <li
      key={item.id}
      className="grid grid-cols-2 pb-2 gap-4 border-b-[1px] border-muted"
    >
      <div className="w-40 h-40 relative">
        <Image
          src={thumbnailImage}
          alt={name}
          fill
          className="object-cover aspect-square"
        />
      </div>

      <div className="flex flex-col">
        <p className="text-base">{name}</p>
        <p className="text-sm font-semibold">$ {price}</p>
        <p>Size: {size}</p>

        <div className="mt-auto ml-auto">
          <FormContainer action={removeCartItemAction}>
            <input type="hidden" name="id" value={id} />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
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
