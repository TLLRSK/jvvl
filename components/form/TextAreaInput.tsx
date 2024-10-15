import { TextAreaInputProps } from "@/utils/types";
import { Label } from "../ui/label";

function TextAreaInput({ name, label, defaultValue, onChange }:TextAreaInputProps) {
  return (
    <div className="grid gap-3">
      <Label className="capitalize">{label || name}</Label>
      <textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        onChange={onChange}
        required
        className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  );
}

export default TextAreaInput;
