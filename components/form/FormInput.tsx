import { formInputProps } from "@/utils/types";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

function FormInput({
  type,
  name,
  label,
  defaultValue,
  placeholder,
}: formInputProps) {
  return (
    <div>
      <Label>{label || name}</Label>
      <Input
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default FormInput;
