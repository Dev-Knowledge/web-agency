import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AOSInit } from "./utils/aos";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["400","700", "500", "900", "300", "100"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <AOSInit />
      <body className={inter.className} >{children}</body>
    </html>
  );
}
