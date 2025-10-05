"use client";

import { Calendar, Code, FileText, User, Clock, Search } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Discovery & Planning",
    date: "Phase 1",
    content: "Understanding your vision and defining project scope",
    category: "Planning",
    icon: Search,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Design & Prototyping",
    date: "Phase 2",
    content: "Creating intuitive interfaces and user experiences",
    category: "Design",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Development",
    date: "Phase 3",
    content: "Building robust, scalable software solutions",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "Testing & QA",
    date: "Phase 4",
    content: "Rigorous testing to ensure quality and performance",
    category: "Testing",
    icon: User,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 5,
    title: "Deployment",
    date: "Phase 5",
    content: "Seamless launch with zero downtime",
    category: "Release",
    icon: Clock,
    relatedIds: [4, 6],
    status: "pending" as const,
    energy: 10,
  },
    {
    id: 6,
    title: "Support & Maintenance",
    date: "Phase 6",
    content: "Ongoing optimization and technical support",
    category: "Support",
    icon: Calendar,
    relatedIds: [5],
    status: "pending" as const,
    energy: 10,
    },
];

export function RadialOrbitalTimelineDemo() {
  return (
    <div className="bg-black text-white py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Our Proven Development Process</h2>
        <p className="text-lg text-gray-400 text-center mb-8">A systematic approach to building exceptional software</p>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </div>
  );
}