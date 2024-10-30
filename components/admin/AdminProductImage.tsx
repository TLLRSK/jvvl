"use client";

import Image from "next/image";
import DeleteIcon from "../icons/DeleteIcon";

function AdminProductImage({
  index = 0,
  image,
  removeAction,
}: {
  index?: number;
  image: File | string;
  removeAction: (index: number) => void;
}) {
  const handleRemoveAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeAction(index);
  };

  return (
    <li className="relative w-40 h-40 list-none border-[1px] border-input">
      <Image
        src={typeof(image) === "string" ? image : URL.createObjectURL(image)}
        alt="image"
        fill
        className="aspect-square object-cover"
      />
      <button
        onClick={(e) => handleRemoveAction(e)}
        aria-label="remove image"
        className="absolute top-2 right-2 min-w-3 min-h-3 p-0 rounded-full text-lg font-semibold opacity-60 hover:opacity-100"
      >
        <DeleteIcon />
      </button>
    </li>
  );
}

export default AdminProductImage;