import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CallToActionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Build Something Great Together.</h2>
        <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
          <Link href="/contact">Schedule a Consultation</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToActionBanner;