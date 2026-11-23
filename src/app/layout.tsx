import type { Metadata } from "next";
import {
  Inter,
  Fraunces,
  Noto_Sans_Bengali,
  Barlow_Condensed,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["500", "600", "700"],
  variable: "--font-bengali",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["800"],
  style: "italic",
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://autex.vercel.app",
  ),
  title: "Soleil — Luxury Handcrafted Footwear",
  description:
    "Experience unparalleled comfort with Soleil's handcrafted footwear. Built for those who move with intention. Premium materials, minimal design.",
  openGraph: {
    title: "Soleil — Luxury Handcrafted Footwear",
    description:
      "Experience unparalleled comfort with Soleil's handcrafted footwear.",
    url: "https://autex.vercel.app/",
    siteName: "Soleil",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soleil — Luxury Handcrafted Footwear",
    description:
      "Experience unparalleled comfort with Soleil's handcrafted footwear.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`antialiased ${inter.variable} ${fraunces.variable} ${notoBengali.variable} ${barlowCondensed.variable}`}
    >
      <body className="w-full min-h-screen bg-[#F5F0E8] m-0 p-0 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
