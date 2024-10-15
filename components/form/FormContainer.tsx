'use client'
import { useToast } from "@/hooks/use-toast";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

function FormContainer({
  onSubmit,
  className = '',
  children,
}: {
  onSubmit: any;
  className?: string;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(onSubmit, initialState);
  const { toast } = useToast();
  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state]);
  return <form onSubmit={formAction} className={`grid gap-4 ${className}`}>{children}</form>;
}

export default FormContainer;
