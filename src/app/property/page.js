'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import AdviceToolsSection from '@/components/AdviceToolsSection';
import WhatsApp from '@/components/WhatsApp';
import { Properties, blogs } from '../../data/properties.json';
import Script from 'next/script';
import BlogCard from '@/components/BlogCard';
import SearchFilters from '@/components/SearchFilters';
import FAQ from '@/components/FAQ';


const Property = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('Select Location');
  const [propertyType, setPropertyType] = useState('All Types');
  const [budget, setBudget] = useState('Any Budget');
  const [filteredProperties, setFilteredProperties] = useState(Properties);



  const handleSearch = () => {
    let results = Properties;

    // Keyword filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q)
      );
    }

    // Location filter
    if (location !== 'Select Location') {
      results = results.filter((p) =>
        p.location.toLowerCase().includes(location.toLowerCase())
      );
    }


    // Type filter
    if (propertyType !== 'All Types') {
      results = results.filter((p) => p.type === propertyType);
    }

    // Budget filter
    if (budget !== 'Any Budget') {
      results = results.filter((p) => {
        const price = parseFloat(p.price.replace(/[^\d.]/g, '')); // extract number
        if (budget === 'Under 50 L') return price < 5000000;
        if (budget === '50 L - 1 Cr') return price >= 5000000 && price <= 10000000;
        if (budget === '1 Cr - 2 Cr') return price > 10000000 && price <= 20000000;
        return true;
      });
    }

    setFilteredProperties(results);
  };

  return (
    <div className="min-h-screen bg-gray-100">
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
      <section className="relative py-16 mt-16" style={{
        backgroundImage: "url('/images/back22.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 text-left md:text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Dream Property in Nagpur
          </h1>
          <p className="text-xl md:text-2xl text-white">
            Discover the best residential and commercial properties in Nagpur
          </p>
        </div>
      </section>

      {/* 🔍 Filter Bar */}
      <SearchFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        location={location}
        setLocation={setLocation}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        budget={budget}
        setBudget={setBudget}
        handleSearch={handleSearch}
      />

      {/* 🏡 Properties Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">Featured Properties</h2>

        {filteredProperties.length === 0 ? (
          <p className="text-center text-gray-500">No properties found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property) => {
              const slug = `${property.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')}`;
              return (
                <div
                  key={property.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={property.images[0]}
                      alt={property.title}
                      fill
                      className="object-cover rounded-t-lg"
                      priority={false}
                    />
                  </div>
                  <div className="p-4">
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-2">
                      {property.type}
                    </span>
                    <h3 className="text-xl font-bold text-black mb-1">{property.title}</h3>
                    <p className="text-gray-600">{property.location}</p>
                    <p className="text-gray-600">{property.area}</p>
                    <p className="text-lg font-semibold text-blue-700 my-3">{property.price}</p>

                    <Link href={`/property/${property.id}-${slug}`} passHref>
                      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <AdviceToolsSection />
      <div className="mt-24 px-4 md:px-12 py-10 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Real Estate Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
      <FAQ /> 
      <Footer />
    </div>
  );
};

export default Property;
