"use client";
import React from "react";
import { CheckboxInputProps } from "@/utils/types";

function CheckboxInput({ name, label, defaultChecked, onChange }: CheckboxInputProps) {
  return (
    <label
      htmlFor={name}
      className="flex flex-col text-sm font-medium leading-none gap-1 capitalize"
    >
      {label}
      <input
        type="checkbox"
        className="hidden peer"
        id={name}
        name={name}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <div
        className="
      w-16 h-8 relative bg-transparent rounded-full shadow-custom-border cursor-pointer
      peer-checked:[&>span]:translate-x-8 peer-checked:[&>span]:bg-primary
      "
      >
        <span className="w-8 h-8 rounded-full bg-background absolute left-0 transition-transform duration-300 shadow-custom-border" />
      </div>
    </label>
  );
}

export default CheckboxInput;
