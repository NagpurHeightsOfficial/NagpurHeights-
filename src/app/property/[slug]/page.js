import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsApp from "@/components/WhatsApp";
import { Properties } from '../../../data/properties.json';
import ImageGallery from "@/components/ImageGallery"; // import client component
import WhatsApp_button from "@/components/WhatsApp_button";
import { FaBuilding } from 'react-icons/fa';
import Breadcrumbs from '@/components/Breadcrumbs';
import Script from "next/script";
import FAQ from "@/components/FAQ";


export async function generateMetadata({ params }) {
  if (!params?.slug) {
    return {
      title: 'Property Not Found',
      description: 'No details available',
    };
  }
  const id = Number(params.slug.split('-')[0]);
  const property = Properties.find(prop => prop.id === id);


  const url = `http://nagpurheights.com/property/${params.slug}`;

  return {
    title: property
      ? `${property.title} – ${property.location} | 2BHK & 3BHK Flats in Nagpur`
      : 'Real Estate in Nagpur | Nagpur Heights',

    description: property
      ? `Explore ${property.title} at ${property.location}. Buy 2BHK & 3BHK flats in Nagpur with modern amenities. Ideal for investment and end-use. Enquire now with Nagpur Heights.`
      : 'Buy, sell and invest in flats, plots and residential properties across Nagpur with Nagpur Heights.',

    keywords: [
      property.title,
      property.location,
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
    openGraph: {
      title: `${property.title} – 2BHK & 3BHK Apartments in ${property.location} | Nagpur Heights`,
      description: `Explore premium flats at ${property.title}, Omkar Nagar – from ₹69 Lacs.`,
      url: `https://www.nagpurheights.com/property/${params.slug}`,
      images: [
        {
          url: property.images?.[0] || 'https://www.nagpurheights.com/default.jpg',
          width: 1200,
          height: 630,
          alt: `${property.title} in ${property.location}`,
        },
      ],
      siteName: 'Nagpur Heights',
      type: 'website',
    }
    ,
    robots: {
      index: true,
      follow: true,
    },
    type: 'website',

  };
}

export default function PropertyDetails({ params }) {
  const id = Number(params.slug.split('-')[0]);
  const property = Properties.find(p => p.id === id);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Properties in Nagpur', href: '/property' },
    { label: property.title }, // No href means current page
  ];

  if (!property) {
    return (
      <>
        <Header />
        <div className="max-w-4xl mx-auto mt-40 p-6 text-center bg-white">
          <h1 className="text-2xl font-bold text-red-500">Property not found</h1>
        </div>
        <Footer />
      </>
    );
  }

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
      <WhatsApp />
      <main className="max-w-7xl mx-auto pt-32 px-4 pb-12 bg-white">
        <Breadcrumbs items={breadcrumbs} />
        {/* Property Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">{property.title}</h1>
          <p className="text-xl text-gray-600 mt-2">{property.location}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-white">
          {/* Left Column - Image Gallery */}
          <div className="lg:col-span-3">
            <ImageGallery images={property.images} title={property.title} />

            {/* property Status */}
            <div className="bg-[#f2faff] rounded-md p-6 w-full max-w-3xl mt-8">
              <h4 className="text-xs text-gray-500 uppercase mb-1">Construction Status</h4>
              <h2 className="text-xl font-bold text-[#0d1a38] mb-4">New Launch</h2>

              <div className="flex flex-wrap gap-4">
                {property.Phases.map((phase, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-md shadow-sm flex-1 min-w-[164px] max-w-sm flex items-start gap-3"
                  >
                    {/* Optional icon */}
                    <FaBuilding className="text-blue-500 text-xl mt-1" />

                    <div>
                      <p className="text-sm">
                        <strong>{phase} Phase</strong> is New Launch
                      </p>
                      <p className="text-sm text-gray-500">
                        {property.Completion_Date_of_phases[index]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            {/* Amenities Section */}
            {property.amenities && (
              <div className="mt-8 bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Amenities in {property.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.amenities.split(', ').map((amenity, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Key Details Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Details</h2>

              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Price</span>
                  <span className="text-green-600 font-bold text-lg">{property.price}</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Property Type</span>
                  <span className="text-blue-600 capitalize">{property.type}</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Area</span>
                  <span className="text-gray-800">{property.area}</span>
                </div>

                {/* Contact Button */}
                <WhatsApp_button number={property.whatsapp} />
              </div>
            </div>

            {/* Property Description */}
            {property.description && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">About {property.title}</h2>
                <p className="text-gray-700">{property.description}</p>
              </div>
            )}
            {/* Additional Information */}
            {property.info && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Information</h2>
                <ul className="space-y-2 text-gray-700">
                  {property.info.split(', ').map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
      <FAQ />
      <Footer />
    </>
  );
}