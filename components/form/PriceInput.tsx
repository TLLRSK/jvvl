import { Label } from "../ui/label";
import { Input } from "../ui/input";

function PriceInput({
  defaultValue = 0,
  onChange 
}: {
  defaultValue?: number,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}) {
  return (
    <div>
      <Label htmlFor="price" className="capitalize">
        Price ($)
      </Label>
      <Input
        id="price"
        type="number"
        name="price"
        min={0}
        defaultValue={defaultValue}
        onChange={onChange}
        required
      />
    </div>
  );
}
export default PriceInput;
