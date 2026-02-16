import type { Metadata } from "next";
import "./globals.css";
import Nav from "./component/Nav";
import FixedCTA from "./component/FixedCTA";

export const metadata: Metadata = {
  title: "Numbuzin",
  description: "Retinol Eye Cream",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Nav />
        {children}
        <FixedCTA />
      </body>
    </html>
  );
}
