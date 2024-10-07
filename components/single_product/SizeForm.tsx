"use client";
import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface SizeFormProps {
  sizes: string[];
}

function SizeForm({ sizes }: SizeFormProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <form className="mx-auto flex flex-col gap-2">
      <p className="text-md uppercase text-center border-primary border-b-[1px] pb-2">
        Sizes
      </p>
      <RadioGroup
        onValueChange={setSelectedSize}
        value={selectedSize || undefined}
      >
        <div className="flex flex-wrap gap-4 justify-center">
          {sizes.map((size) => (
            <div key={size} className="flex items-center">
              <RadioGroupItem
                value={size}
                id={`size-${size}`}
                className="hidden"
              />
              <Label
                htmlFor={`size-${size}`}
                className={`text-md cursor-pointer hover:underline ${
                selectedSize === size ? "font-bold opacity-100" : "opacity-80"
                }`}
              >
                {size}
              </Label>
            </div>
          ))}
        </div>
      </RadioGroup>
    </form>
  );
}

export default SizeForm;
