import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Momentum Labs — Websites That Bring In Clients",
  description:
    "Momentum Labs builds conversion-focused websites for B2B companies serious about growth. Lead generation, brand identity, and CRO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-[#0A0A0A] text-white antialiased">{children}</body>
    </html>
  );
}
