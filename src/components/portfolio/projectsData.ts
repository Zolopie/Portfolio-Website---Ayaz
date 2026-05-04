import aiResume from "@/assets/project-ai-resume.jpg";
import shiftlyCrm from "@/assets/project-shiftly-crm.jpg";
import shiftlyMobile from "@/assets/project-shiftly-mobile.jpg";
import pedBuddy from "@/assets/project-ped-buddy.jpg";

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  stack: string[];
  cover: string;
  gallery: string[];
  github?: string;
  demo?: string;
  year: string;
  role: string;
};

export const projects: Project[] = [
  {
    id: "ai-resume-assistant",
    title: "AI Resume Assistant",
    tagline: "Chat-based resume coach powered by LLMs",
    description:
      "A chat-based resume improvement tool that analyzes CVs against job descriptions and returns a match score with actionable suggestions.",
    longDescription:
      "AI Resume Assistant helps job seekers tailor their CV to a specific role. Users paste a job description, upload their resume, and chat with an assistant that highlights gaps, suggests rewrites, and produces a quantitative match score so improvements can be tracked over time.",
    features: [
      "Conversational CV review with context memory",
      "Job-description match score (0–100)",
      "Targeted bullet & summary rewrites",
      "Export improved resume as PDF",
    ],
    stack: ["React", "Node.js", "Express", "OpenAI API", "Tailwind"],
    cover: aiResume,
    gallery: [aiResume],
    github: "https://github.com",
    demo: "https://example.com",
    year: "2025",
    role: "Full-stack",
  },
  {
    id: "shiftly-crm",
    title: "Shiftly CRM",
    tagline: "Web CRM for small workforce-driven teams",
    description:
      "Web-based CRM for small teams: authentication, dashboards, and full CRUD over customers, contracts and activity.",
    longDescription:
      "Shiftly CRM centralizes customers, contracts and team activity in one dashboard. It includes role-based authentication, real-time KPIs, and a fully featured CRUD layer so managers can run their pipeline without spreadsheets.",
    features: [
      "Email + role-based authentication",
      "Analytics dashboard with KPIs & charts",
      "Customer, contract & activity CRUD",
      "Search, filters and CSV export",
    ],
    stack: ["React", "Node.js", "Express", "SQLite", "Recharts"],
    cover: shiftlyCrm,
    gallery: [shiftlyCrm],
    github: "https://github.com",
    demo: "https://example.com",
    year: "2025",
    role: "Full-stack",
  },
  {
    id: "shiftly-mobile",
    title: "Shiftly Mobile App",
    tagline: "Workforce management on the go",
    description:
      "Workforce management app for shift tracking, attendance and scheduling — built for fast on-the-go use.",
    longDescription:
      "Shiftly Mobile is the field companion to the CRM. Employees check in, view upcoming shifts and request swaps, while managers approve schedules from anywhere. Built with React Native for a smooth native feel on iOS and Android.",
    features: [
      "Calendar-based shift tracking",
      "One-tap attendance check-in",
      "Push notifications for schedule changes",
      "Offline-ready sync",
    ],
    stack: ["React Native", "Expo", "Node.js", "SQLite"],
    cover: shiftlyMobile,
    gallery: [shiftlyMobile],
    github: "https://github.com",
    year: "2025",
    role: "Mobile + API",
  },
  {
    id: "ped-buddy",
    title: "Ped Buddy Mobile App",
    tagline: "Friendly companion for routines & reminders",
    description:
      "A companion mobile app helping users track activity, routines, and reminders with a friendly, focused UI.",
    longDescription:
      "Ped Buddy keeps daily routines on track with smart reminders, streaks and gentle progress feedback. The app focuses on clarity and habit-forming UX rather than gamification overload.",
    features: [
      "Daily routines & checklists",
      "Smart contextual reminders",
      "Streaks and progress visualization",
      "Local-first storage",
    ],
    stack: ["React Native", "Expo", "SQLite"],
    cover: pedBuddy,
    gallery: [pedBuddy],
    github: "https://github.com",
    year: "2024",
    role: "Mobile",
  },
];
