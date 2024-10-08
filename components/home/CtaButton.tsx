
import { Button } from "../ui/button";
import Link from "next/link";

function CtaButton({ text }: { text: string }) {
  return (
    <Link href="/products/" className="w-fit mx-auto mb-6">
      <Button
        variant="outline"
        className="bg-background p-6 border-primary rounded-2 uppercase"
      >
        {text}
      </Button>
    </Link>
  );
}

export default CtaButton;