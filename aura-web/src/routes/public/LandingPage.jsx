import React from "react";
import HeroSection from "../../components/sections/HeroSection";
import FeaturesSection from "../../components/sections/FeaturesSection";
import HowItWorksSection from "../../components/sections/HowItWorksSection";
import ComponentShowcase from "../../components/sections/ComponentShowcase";
import InstallCtaSection from "../../components/sections/InstallCtaSection";
import SEO from "../../components/common/SEO";

function LandingPage() {
  return (
    <>
      <SEO 
        title="Home" 
        description="Aura - Unleash the future of UI with our modern, high-performance UI components and layout systems. Build faster, look better."
        canonical="/" 
      />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ComponentShowcase />
      <InstallCtaSection />
    </>
  );
}

export default LandingPage;
