"use client";
import { Book, Code, GraduationCap, Laptop, Rocket, Users } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "University Education",
    date: "2018 - 2022",
    content: "Bachelor's degree in Software Engineering with focus on web development and system architecture.",
    category: "Education",
    icon: GraduationCap,
    relatedIds: [2, 3],
    status: "completed",
    energy: 100
  },
  {
    id: 2,
    title: "First Job",
    date: "2022 - Present",
    content: "Frontend Developer position at TechCorp, working with React, TypeScript, and modern web technologies.",
    category: "Work",
    icon: Laptop,
    relatedIds: [1, 3, 4],
    status: "in-progress",
    energy: 90
  },
  {
    id: 3,
    title: "Open Source",
    date: "2021 - Present",
    content: "Contributing to various open source projects, focusing on React components and developer tools.",
    category: "Projects",
    icon: Code,
    relatedIds: [1, 2, 5],
    status: "in-progress",
    energy: 85
  },
  {
    id: 4,
    title: "Tech Conference",
    date: "2023",
    content: "Speaker at WebDevConf 2023, presenting on modern React patterns and performance optimization.",
    category: "Events",
    icon: Users,
    relatedIds: [2, 5],
    status: "completed",
    energy: 95
  },
  {
    id: 5,
    title: "Side Project",
    date: "2023 - Present",
    content: "Developing a personal project management tool with React and Node.js.",
    category: "Projects",
    icon: Rocket,
    relatedIds: [3, 4],
    status: "in-progress",
    energy: 75
  },
  {
    id: 6,
    title: "Online Course",
    date: "2024",
    content: "Creating an online course about advanced React patterns and best practices.",
    category: "Education",
    icon: Book,
    relatedIds: [2, 3],
    status: "pending",
    energy: 60
  }
];

export default function TimelineExample() {
  return (
    <div className="min-h-screen bg-black">
      <RadialOrbitalTimeline timelineData={timelineData} />
    </div>
  );
} 