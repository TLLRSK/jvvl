"use client";
import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface SizeInputProps {
  sizes: string[];
  onChange: (value: string) => void;
}

function SizeInput({ sizes, onChange }: SizeInputProps) {

  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleChange = (value: string) => {
    setSelectedSize(value);
    onChange(value);
  }

  return (
    <div className="mx-auto flex flex-col gap-2">
      <p className="text-md uppercase text-center border-primary border-b-[1px] pb-2">
        Sizes
      </p>
      <RadioGroup
        onValueChange={handleChange}
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
                className={`px-2 py-1 text-md rounded-sm cursor-pointer hover:bg-accent ${
                selectedSize === size ? "font-bold bg-accent" : "bg-transparent"
                }`}
              >
                {size}
              </Label>
            </div>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}

export default SizeInput;
