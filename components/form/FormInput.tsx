import { formInputProps } from "@/utils/types";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

function FormInput({
  type,
  name,
  label,
  value,
  defaultValue,
  placeholder,
  required = true,
  onChange,
}: formInputProps) {
  return (
    <div className={`${type === 'hidden' ? 'hidden' : 'block'}`}>
      <Label className="capitalize">{label || name}</Label>
      <Input
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </div>
  );
}

export default FormInput;
