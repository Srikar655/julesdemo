import React from 'react';
import DisplayCards from '@/components/ui/display-cards';
import { RadialOrbitalTimelineDemo } from '@/components/ui/RadialOrbitalTimelineDemo';
import CallToActionBanner from '@/components/ui/CallToActionBanner';
import { Globe, Code, Smartphone, Bot, BarChart, Cloud, Lightbulb, Server } from 'lucide-react';

const solutions = [
  {
    icon: <Globe className="size-4 text-blue-300" />,
    title: "Web Development",
    description: "Custom web applications that scale",
    date: "React, Next.js, Node.js, Python, .NET",
  },
  {
    icon: <Smartphone className="size-4 text-blue-300" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences",
    date: "React Native, Flutter, Swift, Kotlin",
  },
  {
    icon: <Server className="size-4 text-blue-300" />,
    title: "Desktop / Windows Applications",
    description: "Powerful enterprise desktop software",
    date: ".NET, Electron, WPF, C++",
  },
  {
    icon: <Code className="size-4 text-blue-300" />,
    title: "UI/UX & Product Design",
    description: "User-centered design that converts",
    date: "Figma, Adobe XD, Sketch, Prototyping",
  },
  {
    icon: <Bot className="size-4 text-blue-300" />,
    title: "AI & Automation Solutions",
    description: "Intelligent systems that work smarter",
    date: "TensorFlow, PyTorch, OpenAI, Machine Learning",
  },
  {
    icon: <BarChart className="size-4 text-blue-300" />,
    title: "SEO & Digital Marketing",
    description: "Data-driven growth strategies",
    date: "Analytics, SEO tools, Content marketing",
  },
  {
    icon: <Cloud className="size-4 text-blue-300" />,
    title: "Cloud & DevOps Solutions",
    description: "Scalable infrastructure and automation",
    date: "AWS, Azure, GCP, Docker, Kubernetes",
  },
  {
    icon: <Lightbulb className="size-4 text-blue-300" />,
    title: "Software Consulting & Support",
    description: "Expert guidance and ongoing maintenance",
    date: "Technical consulting, Code reviews, Support",
  },
];

export default function SolutionsPage() {
  return (
    <main>
      <div className="text-center py-20 bg-black text-white">
        <h1 className="text-5xl font-bold">Comprehensive Software Solutions for Every Challenge</h1>
        <p className="text-xl mt-4 text-gray-400">Cutting-edge technology services tailored to your business needs</p>
      </div>
      <div className="bg-black py-20">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {solutions.map((solution, index) => (
                    <DisplayCards key={index} cards={[solution]} />
                ))}
            </div>
        </div>
      </div>
      <div className="bg-black">
        <h2 className="text-4xl font-bold text-center text-white mb-12">How We Deliver Excellence</h2>
        <RadialOrbitalTimelineDemo />
      </div>
      <CallToActionBanner />
    </main>
  );
}