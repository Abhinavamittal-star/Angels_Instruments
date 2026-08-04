import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RFQModal from "@/components/RFQModal";
import { RFQProvider } from "@/context/RFQContext";
import ClickSpark from "@/components/reactbits/ClickSpark";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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

export const viewport = {
  themeColor: "#060910",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased bg-background`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
        <RFQProvider>
          <ClickSpark />
          <Header />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
          <RFQModal />
        </RFQProvider>
      </body>
    </html>
  );
}
