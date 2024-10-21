import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { cn } from "@/lib/utils";

import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";

import { themeSessionResolver } from "./sessions.server";
import styles from "./tailwind.css?url";

export const links: LinksFunction = () => [
  {
    rel: "icon",
    href: "/svg/logo-light.svg",
    media: "(prefers-color-scheme: light)",
  },
  {
    rel: "icon",
    href: "/svg/logo-dark.svg",
    media: "(prefers-color-scheme: dark)",
  },
  { rel: "stylesheet", href: styles },

  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap",
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
}

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>();

  return (
    <ThemeProvider
      specifiedTheme={data.theme}
      themeAction="/action/set-theme"
    >
      {children}
    </ThemeProvider>
  );
}

export default function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();
  return (
    <>
      <html
        lang="en"
        className={cn(theme)}
      >
        <head>
          <title>Home | Insight the Mind</title>
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
            content="Home | Insight the Mind"
          />
          <meta
            property="og:description"
            content="Elevate your blogging with our AI tools designed to inspire creativity and streamline your writing process."
          />
          <meta
            property="og:image"
            content="URL_to_your_image.jpg"
          />
          <meta
            property="og:url"
            content="https://www.le-insight.com"
          />
          <meta
            name="twitter:title"
            content="Home | Insight the Mind"
          />
          <meta
            name="twitter:description"
            content="Unlock your writing potential with our AI-integrated blogging application."
          />
          <Meta />
          <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
          <Links />
        </head>
        <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </>
  );
}
