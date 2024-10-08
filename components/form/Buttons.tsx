import React from "react";
import { Button } from "../ui/button";

export function SubmitButton({
  className = "",
  text = "submit",
  variant = "default",
}: {
  className?: string;
  text?: string;
  variant?: string;
}) {
  return (
    <Button 
        type='submit'
        variant="default" 
        className="mx-auto uppercase"
    >
      {text}
    </Button>
  );
}
