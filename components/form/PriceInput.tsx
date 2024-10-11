import { Label } from "../ui/label";
import { Input } from "../ui/input";

function PriceInput() {
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
        defaultValue={100}
        required
      />
    </div>
  );
}
export default PriceInput;
