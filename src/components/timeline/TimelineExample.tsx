"use client";
import { Book, Code, GraduationCap, Laptop, Rocket, Users } from "lucide-react";
import RadialOrbitalTimeline from "../ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Frontend Developer Education",
    date: "2024 - 2026",
    content: "Studying frontend development at EC Utbildning, focusing on HTML, CSS, JavaScript, React, and Agile methodologies.",
    category: "Education",
    icon: GraduationCap,
    relatedIds: [2, 3],
    status: "in-progress" as "in-progress",
    energy: 100
  },
  {
    id: 2,
    title: "Weddit Project",
    date: "2024",
    content: "Developed a Reddit-inspired web app using React, HTML, CSS with routing and component-based design.",
    category: "Projects",
    icon: Rocket,
    relatedIds: [1, 3, 4],
    status: "completed" as "completed",
    energy: 90
  },
  {
    id: 3,
    title: "Byt Däck Project",
    date: "2024",
    content: "Built a responsive JavaScript web app with form validation and modern CSS techniques.",
    category: "Projects",
    icon: Code,
    relatedIds: [1, 2, 4],
    status: "completed" as "completed",
    energy: 85
  },
  {
    id: 4,
    title: "Library App",
    date: "2024",
    content: "Created a web-based library management app focusing on grid layout and local storage with HTML and CSS.",
    category: "Projects",
    icon: Laptop,
    relatedIds: [2, 3],
    status: "completed" as "completed",
    energy: 80
  },
  {
    id: 5,
    title: "Angular & Backend Studies",
    date: "2025",
    content: "Currently expanding knowledge by studying Angular and exploring basic backend development.",
    category: "Education",
    icon: Book,
    relatedIds: [1],
    status: "in-progress" as "in-progress",
    energy: 75
  },
  {
    id: 6,
    title: "Looking for Job ",
    date: "2025 - 2026",
    content: "Seeking job positions in frontend development, particularly interested in React and agile teams.",
    category: "Work",
    icon: Users,
    relatedIds: [1, 5],
    status: "pending" as "pending",
    energy: 70
  }
];

export default function TimelineExample() {
  return (
    <div className="min-h-screen bg-black">
      <RadialOrbitalTimeline timelineData={timelineData} />
    </div>
  );
}
