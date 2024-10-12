import React from "react";
import { Button } from "../ui/button";

export function SubmitButton({
  text = "submit",
  className = '',
}: {
  className?: string;
  text?: string;
  variant?: string;
}) {
  return (
    <Button 
        type='submit'
        className={`mx-auto uppercase ${className}`}
    >
      {text}
    </Button>
  );
}
