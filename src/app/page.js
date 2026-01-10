"use client"
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import AdviceToolsSection from '../components/AdviceToolsSection';
import ProminentProjects from '@/components/ProminentProjects';
import WhatsApp from '@/components/WhatsApp';
import { Properties, blogs } from '../data/properties.json';
import WhyChooseUs from '@/components/WhyChooseUs';
import Script from "next/script";
import BlogCard from '@/components/BlogCard';
import FAQ from '@/components/FAQ';
import HeroCarousel from '@/components/HeroCarousel';
import LogoSlider from '@/components/LogoSlider';
import ContactForm from '@/components/ContactForm';

const Home = () => {

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* <!-- Google tag (gtag.js) --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-QMRPX5VY37" strategy="afterInteractive"></script>
      <Script id="gtag-init" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QMRPX5VY37');
          `}
      </Script>
      <Header />
      <WhatsApp />

      {/* Hero Section */}
      <div className="relative bg-white">
        <HeroCarousel />




      </div>
      <LogoSlider />

      {/* Featured Properties */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6"> Discover Trusted Properties in Nagpur</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Properties.slice(0, 8).map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Why Choose Nagpur Heights?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" loading="lazy">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Verified Listings in Nagpur</h3>
              <p className="text-gray-600">All our properties are thoroughly verified for authenticity.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" loading="lazy">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Best Prices in Nagpur Real Estate</h3>
              <p className="text-gray-600">We offer competitive prices for all types of properties in Nagpur.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" loading="lazy">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our support team is always ready to assist you.</p>
            </div>
          </div>
        </div>
      </div>
      {/* ProminentProjects */}
      <div>
        <ProminentProjects />
      </div>

      {/* Tools section */}
      <div>
        <AdviceToolsSection />
        <WhyChooseUs />
      </div>
      <div className="mt-24 px-4 md:px-12 py-10 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Real Estate Blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </div >
      <FAQ />
      <div className="block md:hidden container mx-auto px-10 py-6 bg-white shadow-md rounded-lg my-6">
        
        <p className="text-sm text-gray-600 mb-4 text-center">Questions? Call or message us, or use the form below.</p>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Home;