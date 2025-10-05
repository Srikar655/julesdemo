import { Rocket, Star, Award, Users } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: Rocket,
    name: "120+ Projects",
    description: "Successfully delivered across industries.",
    href: "/solutions",
    cta: "View Projects",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-2",
  },
  {
    Icon: Star,
    name: "98% Client Satisfaction",
    description: "Consistently exceeding expectations.",
    href: "/contact",
    cta: "Read Testimonials",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-1",
  },
  {
    Icon: Award,
    name: "15+ Years Experience",
    description: "Industry expertise you can trust.",
    href: "/about",
    cta: "Learn More",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-1",
  },
  {
    Icon: Users,
    name: "42 Team Members",
    description: "Talented professionals dedicated to your success.",
    href: "/careers",
    cta: "Join Us",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-2",
  },
];

export function BentoDemo() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Impact in Numbers</h2>
        <BentoGrid>
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}