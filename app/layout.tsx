import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patrice Philétas — Développeur Full Stack",
  description:
    "Portfolio de Patrice Philétas, développeur Full Stack en formation (Ada Tech School) et graphiste avec 15 ans d'expérience éditoriale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0f0f0f] text-[#f0f0f0]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
