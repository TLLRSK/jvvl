<<<<<<< HEAD
"use client";
import { useToast } from "@/hooks/use-toast";
import { actionFunction } from "@/utils/types";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
=======
'use client';

import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { actionFunction } from '@/utils/types';
>>>>>>> dev

const initialState = {
  message: '',
};

function FormContainer({
  action,
<<<<<<< HEAD
  className = "",
=======
>>>>>>> dev
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);
  const { toast } = useToast();
  useEffect(() => {
    if (state?.message) {
      toast({ description: state?.message });
    }
  }, [state]);
<<<<<<< HEAD
  return (
    <form action={formAction} className={`grid gap-4 ${className}`}>
      {children}
    </form>
  );
}
=======
>>>>>>> dev

  return <form action={formAction} className='flex'>{children}</form>;
}
export default FormContainer;