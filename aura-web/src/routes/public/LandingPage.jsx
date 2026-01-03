import React from "react";
import PageContainer from "../../components/layout/PageContainer";
import { PageSection } from "../../components/layout/PageSection";
import HeroSection from "../../components/sections/HeroSection";
import AboutSection from "../../components/sections/AboutSection";

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default LandingPage;
