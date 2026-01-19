'use client'
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import logo from '../../public/logos/NAGPUR_HEIGHTS_LOGO.png';


const HomeIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-9 0v6m4 0h6m-6 0a2 2 0 002 2h6a2 2 0 002-2v-6a2 2 0 00-2-2h-6a2 2 0 00-2 2v6z" />
  </svg>
);

const BuildingIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4a1 1 0 011-1h4a1 1 0 011 1v4m6-4v4m-3-4v4m6-4v4M12 3v18" />
  </svg>
);

const BlogIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2h2l2 2h4a2 2 0 012 2v12a2 2 0 01-2 2z" />
  </svg>
);

const InfoIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
  </svg>
);

const PhoneIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.586a1 1 0 01.707.293l1.414 1.414a1 1 0 010 1.414L9.414 7.414A16.944 16.944 0 0016.586 14.586l1.293-1.293a1 1 0 011.414 0l1.414 1.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-1C10.611 21 3 13.389 3 5v0z" />
  </svg>
);

const HeaderMuali = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper function to determine if link is active
  const isActive = (href) => {
    // Special case for home page
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen?.();
    }
  };
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/images/extras/mauli_infratech_logo.jpg" alt="Nagpur Heights Logo" className="h-15 w-auto mb-2 mt-2" />
            <span className="text-2xl font-bold text-blue-600"></span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-10 mr-40">

            
            <button
              onClick={toggleFullscreen}
              className="flex items-center justify-center"
              aria-label="Toggle fullscreen"
            >
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg> */}
              <img src="/logos/fullScreen.svg" alt="hhh" className='w- h-5'/>
            </button>
            
          </nav>



          {/* Mobile menu button */}
          <button
            onClick={toggleFullscreen}
            className="flex md:hidden items-center justify-center text-black"
            aria-label="Toggle fullscreen"
          >
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg> */}
           <img src="/logos/fullScreen.svg" alt="hhh" className='w- h-5'/>
          </button>
        </div>



      </div>
    </header>
  );
};

export default HeaderMuali;