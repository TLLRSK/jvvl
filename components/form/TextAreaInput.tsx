import { TextAreaInputProps } from "@/utils/types";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

function TextAreaInput({ name, label, defaultValue }:TextAreaInputProps) {
  return (
    <div>
      <Label className="capitalize">{label || name}</Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        required
      />
    </div>
  );
}

export default TextAreaInput;
