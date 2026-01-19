"use client";

import useIsMobile from "@/hooks/useIsMobile";
import MobileLanding from "@/components/MobileLanding";
import DesktopLanding from "@/components/DesktopLanding";
import HeaderMuali from "@/components/HeaderMuali";
import Footer from "@/components/Footer";

export default function LeadCapturePage() {
  const isMobile = useIsMobile();

  return (
    <>
      <HeaderMuali />
      {isMobile ? <MobileLanding /> : <DesktopLanding />}
      
    </>
  );
}
