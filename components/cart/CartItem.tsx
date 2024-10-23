import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import DeleteIcon from "../icons/DeleteIcon";
import { CartItemProps } from "@/utils/types";
import FormContainer from "../form/FormContainer";
import { removeCartItemAction } from "@/utils/actions";
import { SubmitButton } from "../form/Buttons";

function CartItem(item: CartItemProps) {
  return (
    <li
      key={item.id}
      className="grid grid-cols-2 pb-2 gap-4 border-b-[1px] border-muted"
    >
      <div className="w-40 h-40 relative">
        <Image
          src={item.product.image}
          alt={item.product.name}
          fill
          className="object-cover aspect-square"
        />
      </div>

      <div className="flex flex-col">
        <p className="text-base">{item.product.name}</p>
        <p className="text-sm font-semibold">$ {item.product.price}</p>

        <div className="mt-auto ml-auto">
          <FormContainer action={removeCartItemAction}>
            <input type="hidden" name="id" value={item.id} />
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
