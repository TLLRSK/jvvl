
import { Button } from "../ui/button";
import Link from "next/link";

function CtaButton({ text }: { text: string }) {
  return (
    <Link href="/products/" className="w-fit mx-auto mb-12">
      <Button
        variant='ghost'
        className="h-fit bg-transparent px-8 py-4 text-secondary text-lg border-[1px] border-secondary rounded-none uppercase"
      >
        {text}
      </Button>
    </Link>
  );
}

export default CtaButton;