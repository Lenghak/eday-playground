import {
  Playfair_Display,
  Source_Code_Pro,
  Source_Sans_3,
  Source_Serif_4,
} from "next/font/google";

export const sans = Source_Sans_3({
  subsets: ["latin"],
  preload: true,
  display: "swap",
});

export const serif = Source_Serif_4({
  subsets: ["latin"],
  preload: true,
  display: "swap",
});

export const mono = Source_Code_Pro({
  subsets: ["latin"],
  preload: true,
  display: "swap",
});

export const display = Playfair_Display({
  subsets: ["latin"],
  preload: true,
  display: "swap",
});
