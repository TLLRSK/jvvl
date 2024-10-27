
import { Button } from "../ui/button";
import Link from "next/link";

function CtaButton({ text }: { text: string }) {
  return (
    <Link href="/products/" className="w-fit mx-auto mb-12">
      <Button
        variant='ghost'
        className="h-fit bg-background hover:bg-foreground rounded-3xl px-6 py-3 text-primary hover:text-primary-foreground text-sm border-[1px] border-primary uppercase"
      >
        {text}
      </Button>
    </Link>
  );
}

export default CtaButton;