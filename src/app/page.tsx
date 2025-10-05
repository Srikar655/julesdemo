import React from 'react';
import { HeroSection } from '@/components/ui/hero-section-9';
import { HoverSliderDemo } from '@/components/ui/HoverSliderDemo';
import { RadialOrbitalTimelineDemo } from '@/components/ui/RadialOrbitalTimelineDemo';
import CallToActionBanner from '@/components/ui/CallToActionBanner';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HoverSliderDemo />
      <RadialOrbitalTimelineDemo />
      <CallToActionBanner />
    </main>
  );
}