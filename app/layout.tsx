import type { Metadata } from "next";
import "./globals.css";
import { condensedFont, displayFont } from "./fonts";

export const metadata: Metadata = {
  title: "Coffie House",
  description: "Specialty coffee roastery and cafe landing page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${displayFont.variable} ${condensedFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
