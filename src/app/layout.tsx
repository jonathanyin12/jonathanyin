import "@fortawesome/fontawesome-free/css/all.min.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
const quicksand = Quicksand({ subsets: ["latin"], weight: ["300"] });

export const metadata: Metadata = {
  title: "Jonathan Yin",
  description: "Jonathan Yin's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
