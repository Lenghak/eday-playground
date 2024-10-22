"use client";

import type { ComponentPropsWithoutRef } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { cn } from "@/lib/utils";

import { signInResolver } from "@/features/auth/schemas/sign-in-schema";

type SignInFormProps = ComponentPropsWithoutRef<"form">;

export function SignInForm({ className, ...props }: SignInFormProps) {
  const form = useForm({
    resolver: signInResolver,
  });

  return (
    <FormProvider {...form}>
      <form
        className={cn(className)}
        {...props}
      ></form>
    </FormProvider>
  );
}
