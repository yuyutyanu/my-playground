import { Barlow_Semi_Condensed, Source_Serif_4 } from "next/font/google";

export const displayFont = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
});

export const condensedFont = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-condensed",
});
