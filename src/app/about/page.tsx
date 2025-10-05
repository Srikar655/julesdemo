import React from 'react';
import { BentoDemo } from '@/components/ui/BentoDemo';
import { Features } from '@/components/ui/features-8';
import { LogoCarouselDemo } from '@/components/ui/LogoCarouselDemo';
import { AnimatedTestimonialsDemo } from '@/components/ui/AnimatedTestimonialsDemo';

export default function AboutPage() {
  return (
    <main>
      <div className="text-center py-20 bg-black text-white">
        <h1 className="text-5xl font-bold">Transforming Ideas Into Digital Reality</h1>
        <p className="text-xl mt-4 text-gray-400">We're a team of innovators, designers, and developers passionate about creating software that makes a difference</p>
      </div>
      <BentoDemo />
      <Features />
      <LogoCarouselDemo />
      <AnimatedTestimonialsDemo />
    </main>
  );
}