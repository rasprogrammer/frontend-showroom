import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "500", "600", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Nike Air Max 90",
  description:
    "Iconic layered uppers, a waffle outsole and visible Max Air cushioning. Nike Air Max 90, $98.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
