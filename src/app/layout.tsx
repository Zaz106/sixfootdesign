import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Six Foot Design Co",
    default: "Six Foot Design Co | Branding & Web Design",
  },
  description:
    "Six Foot Design Co is a faith-driven creative studio based in Johannesburg, South Africa, specialising in branding, advertising, illustration, and web design.",
  metadataBase: new URL("https://www.sixfootdesignco.co.za"),
  openGraph: {
    siteName: "Six Foot Design Co",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/six-foot-logo-light.png",
        width: 1200,
        height: 630,
        alt: "Six Foot Design Co",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sixfootdesignco",
    creator: "@sixfootdesignco",
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "PLb-2LopaW-Atw562_b8D7RC9Sgib4R8W0mSnyvfPA4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${poppins.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
