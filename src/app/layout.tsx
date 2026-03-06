import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Justin Holland — Human Potential Speaker & Coach",
  description:
    "Justin Holland is a thought leader in consciousness and human potential. Speaker, coach, and author of the principle: once you see it, you can't unsee it.",
  openGraph: {
    title: "Justin Holland — Human Potential Speaker & Coach",
    description:
      "Once you see it, you can't unsee it. Justin Holland helps people recognize the blind spots that are creating the life they don't want.",
    url: "https://iamjustinholland.com",
    siteName: "Justin Holland",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Holland — Human Potential Speaker & Coach",
    description:
      "Once you see it, you can't unsee it. Justin Holland helps people recognize the blind spots that are creating the life they don't want.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WLEQG4SQV4"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WLEQG4SQV4');
          `}
        </Script>
      </head>
      <body
        className={`${dmSerif.variable} ${inter.variable} antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
