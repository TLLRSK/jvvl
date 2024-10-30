"use client";
import React from "react";
import { Button } from "../ui/button";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";
import { useFormStatus } from "react-dom";
import { ReloadIcon } from "@radix-ui/react-icons";
import { SignInButton } from "@clerk/nextjs";
import FavIcon from "../icons/FavIcon";
import FilledFavIcon from "../icons/FilledFavIcon";

export function SubmitButton({
  text = "submit",
  className = "",
}: {
  className?: string;
  text?: string;
  variant?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      aria-label="submit form"
      className={`mx-auto capitalize h-fit ${className}`}
    >
      {pending ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Processing order...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

type ActionType = "edit" | "delete";

export function IconButton({ actionType }: { actionType: ActionType }) {
  const { pending } = useFormStatus();
  const renderIcon = () => {
    switch (actionType) {
      case "edit":
        return <EditIcon />;
      case "delete":
        return <DeleteIcon />;
      default:
        const never: never = actionType;
        throw new Error(`Invalid action type: ${never}`);
    }
  };
  return (
    <Button
      type="submit"
      size="icon"
      variant="link"
      aria-label={`${{ actionType }} item`}
      className="p-2 cursor-pointer opacity-80 hover:opacity-100"
    >
      {pending ? <ReloadIcon className=" animate-spin" /> : renderIcon()}
    </Button>
  );
}

export const CardSignInButton = () => {
  return (
    <SignInButton mode="modal">
      <button
        aria-label="sign in"
        className="ml-auto p-2 mb-6 opacity-50 hover:opacity-100"
      >
        <FavIcon className="text-foreground w-4 h-4" />
      </button>
    </SignInButton>
  );
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();

  return (
    <button aria-label="toggle fav" className="ml-auto p-2 mb-6 opacity-50 hover:opacity-100">
      {pending ? (
        <ReloadIcon className="animate-spin w-4 h-4" />
      ) : isFavorite ? (
        <FilledFavIcon className="text-foreground w-4 h-4" />
      ) : (
        <FavIcon className="text-foreground w-4 h-4" />
      )}
    </button>
  );
};

export const ProductSignInButton = () => {
  return (
    <SignInButton mode="modal">
      <Button
        variant="default"
        type="button"
        aria-label="sign in"
        className="mt-8 uppercase"
        asChild
      >
        Log in & get your cart
      </Button>
    </SignInButton>
  );
};
