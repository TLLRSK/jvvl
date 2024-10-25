"use client";
import React, { ChangeEvent, useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { ListInputProps } from "@/utils/types";
import DeleteIcon from "../icons/DeleteIcon";

function ListInput({ name, label, placeholder, defaultValue, onChange}: ListInputProps) {
  const [items, setItems] = useState<string[]>(defaultValue ?? []);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newItem = inputValue;
    if (newItem && newItem.trim() !== "") {
      const newItems = [...items, newItem.trim()];
      setItems(newItems);
      onChange(name, newItems);
    }
    setInputValue("");
  };

  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    onChange(name, newItems);
  };

  return (
    <div>
      <Label className="capitalize">{label || name}</Label>
      <ul>
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className="flex align-center justify-between border-input border-[1px] rounded-sm text-sm relative px-3 py-2 mb-3"
            >
              <p className="text-md">{item}</p>
              <button
                onClick={() => removeItem(index)}
                className="min-w-3 min-h-3 p-0 rounded-full text-lg font-semibold opacity-80 hover:opacity-100"
              >
                <DeleteIcon />
              </button>
            </li>
            
          );
        })}
      </ul>

      <div className="flex gap-3">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          required={false}
          placeholder={placeholder}
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        />
        <Button
          type="button"
          onClick={addItem}
          className="capitalize"
        >
          Add it
        </Button>
      </div>

      <input type="hidden" name={name} value={JSON.stringify(items)} />
    </div>
  );
}

export default ListInput;
