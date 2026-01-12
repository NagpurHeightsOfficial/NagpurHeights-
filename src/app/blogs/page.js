import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogs } from '../../data/properties.json';
import BlogCard from "@/components/BlogCard";
import Script from "next/script";
import WhatsApp from "@/components/WhatsApp";
import Instagram from "@/components/Instagram";
import Quora from "@/components/Quora";
import FAQ from "@/components/FAQ";


export async function generateMetadata() {
    return {
        title: 'Nagpur Real Estate Blogs | Property Market Trends & Investment Tips | Nagpur Heights',
        description:"Read expert blogs on Nagpur property market trends, real estate investment insights, best localities to buy property, township projects and upcoming developments.",
        keywords: [
            "2BHK",
            "3BHK",
            "2BHK & 3BHK Flats",
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
    };
}

export default function BlogList() {

    return (
        <>
            {/* <!-- Google tag (gtag.js) --> */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-QMRPX5VY37"></script>
            <Script id="gtag-init" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QMRPX5VY37');
          `}
            </Script>
            <Header />
            <div className="mt-24 px-4 md:px-12 py-10 bg-gray-50 min-h-screen">
                <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
                    Real Estate Blogs
                </h1>
                <div className="animate-fadeInUp delay-300">
                    <WhatsApp />
                </div>
                <div className="animate-fadeInUp delay-500">
                    <Instagram />
                </div>
               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.slug} blog={blog} />
                    ))}
                </div>
            </div >
            <FAQ />
            <Footer />
        </>
    );
}
