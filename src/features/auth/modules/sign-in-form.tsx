"use client";

import { type ComponentPropsWithoutRef, useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Flex } from "@/components/ui/flex";

import { cn } from "@/lib/utils";

import { signIn } from "@/actions/auth";
import { OAuthButton } from "@/features/auth/components/oauth-button";
import {
  oAuthSignInResolver,
  type OAuthSignInSchema,
} from "@/features/auth/schemas/sign-in-schema";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";

type SignInFormProps = ComponentPropsWithoutRef<"form">;

export function SignInForm({ className, ...props }: SignInFormProps) {
  const form = useForm<OAuthSignInSchema>({
    resolver: oAuthSignInResolver,
    defaultValues: { provider: "credential" },
  });

  const handleSubmit = useCallback(
    async ({ provider }: OAuthSignInSchema) => await signIn(provider),
    [],
  );

  return (
    <FormProvider {...form}>
      <Flex
        as={"form"}
        direction="col"
        items="center"
        justify="center"
        className={cn("mx-auto max-w-xs gap-4", className)}
        onSubmit={form.handleSubmit(handleSubmit)}
        {...props}
      >
        <OAuthButton
          type="submit"
          onClick={() => form.setValue("provider", "google")}
          icon={IconBrandGoogle}
        >
          Continue with Google
        </OAuthButton>

        <OAuthButton
          type="submit"
          onClick={() => form.setValue("provider", "facebook")}
          icon={IconBrandFacebook}
        >
          Continue with Facebook
        </OAuthButton>

        <OAuthButton
          type="submit"
          onClick={() => form.setValue("provider", "github")}
          icon={IconBrandGithub}
        >
          Continue with Github
        </OAuthButton>
      </Flex>
    </FormProvider>
  );
}
