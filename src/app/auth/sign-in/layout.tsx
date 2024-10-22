import type { PropsWithChildren } from "react";

import { Logo, LogoImage } from "@/components/custom/logo";
import { BorderBeam } from "@/components/magic-ui/border-beam";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Flex } from "@/components/ui/flex";

import TermsPrivacyLinks from "@/features/auth/components/terms-links";
import { PreAuthLayout } from "@/features/auth/layouts/pre-auth-layout";

export default function SignInLayout({ children }: PropsWithChildren) {
  return (
    <PreAuthLayout className="relative z-10">
      <Flex
        direction="column"
        justify="center"
        items="center"
        className="h-full"
      >
        <Card className="relative w-full max-w-screen-xs items-center gap-6">
          <CardHeader className="flex w-full flex-col items-center">
            <Logo className="mb-2 py-4">
              <LogoImage
                width={40}
                height={40}
                className="rounded-full"
              />
            </Logo>
            <CardTitle className="text-center font-bold">
              Welcome to Le Insight
            </CardTitle>
            <CardDescription className="text-center">
              Glad to see you! Choose an option below to get started
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full">{children}</CardContent>
          <CardFooter className="flex w-full flex-col items-center justify-center">
            <TermsPrivacyLinks />
          </CardFooter>
          <BorderBeam
            size={250}
            duration={12}
            delay={9}
          />
        </Card>
      </Flex>
    </PreAuthLayout>
  );
}