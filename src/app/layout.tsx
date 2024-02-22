import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// In your component or App file

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muze",
  description: "CRM for Creators",
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
