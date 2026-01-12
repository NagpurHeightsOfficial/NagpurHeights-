import { LoadingProvider } from "@/providers/LoadingProvider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Head from "next/head";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nagpur Real Estate | Buy & Sell Flats, Plots & Properties in Nagpur – Nagpur Heights",
  description: "Explore Nagpur real estate with Nagpur Heights. Buy flats, buy plots, invest in residential projects, budget homes, luxury flats, and properties near MIHAN, Wardha Road & Samruddhi Expressway.",
  keywords: [
    "Nagpur real estate",
    "property for sale in Nagpur",
    "buy plots in Nagpur",
    "sell plots in Nagpur",
    "buy flat in Nagpur",
    "sell flat in Nagpur",
    "2BHK properties in Nagpur",
    "3BHK flats in Nagpur",
    "affordable flats in Nagpur",
    "luxury flats in Nagpur",
    "ready to move flats Nagpur",
    "under construction flats Nagpur",
    "new residential projects in Nagpur",
    "Nagpur real estate investment",
    "Nagpur property market",
    "real estate developers in Nagpur",
    "best localities to buy property in Nagpur",
    "plots for sale in Hingna Nagpur",
    "residential plots in Nagpur",
    "flats near Wardha Road Nagpur",
    "flats in MIHAN Nagpur",
    "flats near Nagpur Airport",
    "flats for rent in Nagpur",
    "property dealers in Nagpur", 
    "real estate agents in Nagpur",
    "Nagpur Heights",
    "Nagpur township projects",
    "investment property in Nagpur",
    "Nagpur metro corridor properties",
    "budget homes in Nagpur",
    "premium projects in Nagpur",
    "property near Samruddhi Expressway"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: ` Real Estate Services, Nagpur `,
    description: `Buy, Sell, or Rent Real Estate Browse details, prices, and photos.`,
    siteName: 'Buy, Sell, or Rent Real Estate in Nagpur | Nagpur Heights',
    type: 'website',
  },
  icons: {
    icon: "/favicon.ico", // ✅ relative to /public
  },
  verification: {
    google: "ecL8bEp9i-oph2bx8q_qNyFMMy5DrwI6uF0zJS0qT2o", // ✅ This is the proper place
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Nagpur Heights",
              "url": "https://www.nagpurheights.com",
              "description":
                "Buy or sell flats, plots & commercial property in Nagpur. Explore verified listings in MIHAN, Wardha Road & more. Trusted builders, RERA projects & latest property trends.",
              "publisher": {
                "@type": "Organization",
                "name": "Nagpur Heights",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.nagpurheights.com/logo.png",
                },
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target":
                  "https://www.nagpurheights.com/search?query={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <LoadingProvider> */}
        {children}
        {/* </LoadingProvider> */}
      </body>
    </html>
  );
}
