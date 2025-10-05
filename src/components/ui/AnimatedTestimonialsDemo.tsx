"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const teamMembers = [
    {
        quote: "Our vision is to build software that not only functions flawlessly but also inspires and empowers users.",
        name: "John Doe",
        designation: "CEO/Founder",
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote: "We leverage cutting-edge technology to build robust, scalable, and future-proof solutions.",
        name: "Jane Smith",
        designation: "CTO",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote: "User-centric design is at the heart of everything we create. We believe in crafting intuitive and delightful experiences.",
        name: "Emily Watson",
        designation: "Lead Designer",
        src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote: "We write clean, efficient, and maintainable code to ensure the long-term success of our projects.",
        name: "Michael Rodriguez",
        designation: "Senior Developer",
        src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote: "Our goal is to ensure every project is delivered on time, on budget, and to the highest quality standards.",
        name: "Sarah Chen",
        designation: "Project Manager",
        src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export function AnimatedTestimonialsDemo() {
    return (
        <section className="bg-black text-white py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-4">Meet the Minds Behind the Magic</h2>
                <p className="text-lg text-gray-400 text-center mb-8">A diverse team of experts united by passion for innovation</p>
                <AnimatedTestimonials testimonials={teamMembers} />
            </div>
        </section>
    );
}