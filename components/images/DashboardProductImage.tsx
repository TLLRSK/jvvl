"use client";

import Image from "next/image";
import DeleteIcon from "../icons/DeleteIcon";

function DashboardProductImage({
  index = 0,
  image,
  removeAction,
}: {
  index?: number;
  image: File;
  removeAction?: (index?: number) => void;
}) {
  const handleRemoveAction = () => {
    if (removeAction) {
      removeAction(index); // Pasamos index si removeAction está definida
    }
  };
  return (
    <li className="relative w-40 h-40 list-none border-[1px] border-input">
      <Image
        src={URL.createObjectURL(image)}
        alt="image"
        fill
        className="aspect-square object-cover"
      />
      <button
        onClick={handleRemoveAction}
        className="absolute top-2 right-2 min-w-3 min-h-3 p-0 rounded-full text-lg font-semibold opacity-60 hover:opacity-100"
      >
        <DeleteIcon />
      </button>
    </li>
  );
}

export default DashboardProductImage;
