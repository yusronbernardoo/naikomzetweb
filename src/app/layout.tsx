import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NaikOmzet - Jasa Pembuatan Website & Digital Marketing",
  description: "Tingkatkan omzet bisnis Anda dengan solusi digital premium dari NaikOmzet.",
};

import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp/FloatingWhatsApp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
