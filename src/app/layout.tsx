import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Script from "next/script";

const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test Finančnej gramotnosti",
  description: "Test finančnej gramotnosti, ktorý vám pomôže zistiť, či ste finančne gramotní.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8435095568140595"
        crossOrigin="anonymous"
      ></Script>
      <body className={cn(inter.className, "bg-blue-950")}>{children}</body>
    </html>
  );
}
