import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IHG Hotels & Resorts | Book Hotels Direct",
  description: "Book direct at IHG Hotels & Resorts. Over 6,000 hotels across 21 brands in 100+ countries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
