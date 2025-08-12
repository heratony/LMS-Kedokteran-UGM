"use client";

import Harga from "./components/Harga";
import HeroSection from "./components/HeroSection";
import OurFeatures from "./components/OurFeatures";
import OverviewLms from "./components/OverviewLms";
import Pelatihan from "./components/Pelatihan";

export default function LandingPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <OurFeatures />
      <OverviewLms />
      <Harga />
      <Pelatihan/>
    </main>
  );
}
