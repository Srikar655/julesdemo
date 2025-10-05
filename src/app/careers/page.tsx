import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Lanyard from '@/components/ui/Lanyard'; // Assuming Lanyard component will be created

const WhyWorkWithUs = () => {
    const benefits = [
        { title: "Cutting-Edge Projects", description: "Work on innovative technologies", icon: "🚀" },
        { title: "Competitive Compensation", description: "Industry-leading salaries and bonuses", icon: "💰" },
        { title: "Remote Flexibility", description: "Work from anywhere", icon: "🏠" },
        { title: "Learning & Growth", description: "Professional development budget", icon: "📚" },
        { title: "Health Benefits", description: "Comprehensive insurance coverage", icon: "🏥" },
        { title: "Great Culture", description: "Collaborative, inclusive environment", icon: "🎉" },
    ];

    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">Why Join Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-gray-900 border-gray-800 p-6 rounded-lg text-center">
                            <div className="text-4xl mb-4">{benefit.icon}</div>
                            <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
                            <p className="text-gray-400">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const OpenPositions = () => {
    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">Open Positions</h2>
                <Lanyard />
            </div>
        </section>
    );
};


const ApplicationCTA = () => {
    return (
        <section className="py-20 bg-black text-white text-center">
            <div className="container mx-auto px-6">
                <p className="text-xl mb-4">Don't see the right role? Send us your resume anyway!</p>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    <a href="mailto:careers@yourcompany.com">General Application</a>
                </Button>
            </div>
        </section>
    )
}

export default function CareersPage() {
  return (
    <main>
      <div className="text-center py-20 bg-black text-white">
        <h1 className="text-5xl font-bold">Join Our Team of Innovators</h1>
        <p className="text-xl mt-4 text-gray-400">We're always looking for talented people to build the future with us</p>
      </div>
      <WhyWorkWithUs />
      <OpenPositions />
      <ApplicationCTA />
    </main>
  );
}