import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RFQModal from "@/components/RFQModal";
import { RFQProvider } from "@/context/RFQContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ANGELS INSTRUMENTS | ISO 9001:2008 Certified Lab Testing Equipment",
  description:
    "Manufacturer & Exporter of premium testing instruments for Pulp, Paper, Board, Packaging, Surface Coating, Textile, and Pharma Laboratory quality control.",
  keywords: [
    "Paper Testing Instruments",
    "Pulp Testing Instruments",
    "Packaging Testing Instruments",
    "Box Compression Tester",
    "Bursting Strength Tester",
    "Pharma Lab Instruments",
    "ISO 9001:2008 Certified",
    "Angels Instruments",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-background`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-amber-500 selection:text-slate-900">
        <RFQProvider>
          <Header />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
          <RFQModal />
        </RFQProvider>
      </body>
    </html>
  );
}
