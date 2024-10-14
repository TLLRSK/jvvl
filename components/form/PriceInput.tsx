import { Label } from "../ui/label";
import { Input } from "../ui/input";

function PriceInput({
  defaultValue = 100,
}: {
  defaultValue?: number,
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
        required
      />
    </div>
  );
}
export default PriceInput;
