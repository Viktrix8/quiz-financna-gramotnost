import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
