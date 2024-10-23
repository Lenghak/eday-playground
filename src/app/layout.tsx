import { cn } from "@/lib/utils";

import { sans } from "@/app/fonts";
import { ThemeProvider } from "@/providers/themes-provider";
import { SessionProvider } from "next-auth/react";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <title>Home | Le-Insight</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="description"
          content="Discover a powerful blogging platform that integrates AI to enhance your writing experience. Create, edit, and publish engaging content effortlessly. Join our community of bloggers today!"
        />
        <meta
          name="keywords"
          content="blogging, AI, writing, content creation, blog platform, digital writing, online community, editorial tools"
        />
        <meta
          name="author"
          content="Bling-io"
        />
        <meta
          property="og:title"
          content="Home | Le-Insight"
        />
        <meta
          property="og:description"
          content="Elevate your blogging with our AI tools designed to inspire creativity and streamline your writing process."
        />
        <meta
          property="og:image"
          content="/svg/logo-light.svg"
        />
        <meta
          property="og:url"
          content="https://www.le-insight.com"
        />
        <meta
          name="twitter:title"
          content="Home | Le-Insight"
        />
        <meta
          name="twitter:description"
          content="Unlock your writing potential with our AI-integrated blogging application."
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/svg/logo-light-no-background.svg"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/svg/logo-dark-no-background.svg"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className={cn(sans.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
