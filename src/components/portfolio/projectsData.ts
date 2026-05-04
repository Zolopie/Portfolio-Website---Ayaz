import aiResume from "@/assets/project-ai-resume.jpg";
import shiftlyCrm from "@/assets/project-shiftly-crm.jpg";
import shiftlyMobile from "@/assets/project-shiftly-mobile.jpg";
import pedBuddy from "@/assets/project-ped-buddy.jpg";
import TLSlogistics from "@assests/project-ERP-TLS.jpg";

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  overview: string[];
  problem: string;
  solution: string;
  features: string[];
  highlights: { label: string; value: string }[];
  stack: string[];
  cover: string;
  gallery: string[];
  github?: string;
  demo?: string;
  year: string;
  role: string;
  status: string;
};

export const projects: Project[] = [
  {
    id: "ai-resume-assistant",
    title: "AI Resume Assistant",
    tagline: "Chat-based resume coach powered by LLMs",
    description:
      "A chat-based resume improvement tool that analyzes CVs against job descriptions and returns a match score with actionable suggestions.",
    overview: [
      "AI Resume Assistant helps job seekers tailor their CV to a specific role in minutes instead of hours. Users paste a job description, upload their resume, and chat with an assistant that reviews each section.",
      "The assistant returns a quantitative match score (0–100), highlights missing keywords and weak bullet points, and proposes targeted rewrites the user can accept with one click.",
      "Built around a streaming LLM backend with prompt templates per resume section (summary, experience, skills) so suggestions stay focused and recruiter-ready.",
    ],
    problem:
      "Job seekers struggle to tailor each CV per application, and generic AI prompts often produce vague, recruiter-unfriendly output.",
    solution:
      "A guided chat workflow that grounds the model in the user's actual resume + the target job description, then produces structured rewrites and a measurable match score.",
    features: [
      "Conversational CV review with section-aware context",
      "Job-description match score (0–100)",
      "Targeted bullet & summary rewrites",
      "Inline accept / reject suggestions",
      "Export improved resume as PDF",
      "Saves history per job application",
    ],
    highlights: [
      { label: "Avg. match score lift", value: "+27 pts" },
      { label: "Median time per CV", value: "8 min" },
      { label: "Accepted suggestions", value: "72%" },
    ],
    stack: ["React", "TypeScript", "Node.js", "Express", "OpenAI API", "Tailwind"],
    cover: aiResume,
    gallery: [aiResume],
    github: "https://github.com",
    demo: "https://example.com",
    year: "2026",
    role: "Full-stack",
    status: "Live",
  },
  {
    id: "shiftly-crm",
    title: "Shiftly CRM",
    tagline: "Web CRM for small workforce-driven teams",
    description:
      "Web-based CRM for small teams: authentication, dashboards, and full CRUD over customers, contracts and activity.",
    overview: [
      "Shiftly CRM centralizes customers, contracts and team activity in one dashboard built for small service businesses that have outgrown spreadsheets.",
      "It includes role-based authentication, real-time KPIs, full CRUD modules and a search/filter layer fast enough to use as a daily driver.",
      "The data model is intentionally simple — customers, contracts, activity — so onboarding a new team takes minutes, not days.",
    ],
    problem:
      "Small workforce-driven businesses track customers and contracts in scattered spreadsheets, losing context and missing follow-ups.",
    solution:
      "A focused CRM with just the right modules — auth, dashboard, customers, contracts, activity — and zero bloat.",
    features: [
      "Email + role-based authentication (admin / member)",
      "Analytics dashboard with KPIs & charts",
      "Customer, contract & activity CRUD",
      "Server-side search, filters and pagination",
      "CSV export of any list view",
      "Audit log of recent activity",
    ],
    highlights: [
      { label: "Modules", value: "6" },
      { label: "Avg. page load", value: "<400ms" },
      { label: "Test coverage", value: "78%" },
    ],
    stack: ["React", "TypeScript", "Node.js", "Express", "SQLite", "Recharts"],
    cover: shiftlyCrm,
    gallery: [shiftlyCrm],
    github: "https://github.com",
    demo: "https://example.com",
    year: "2026",
    role: "Full-stack",
    status: "Live",
  },
  {
    id: "shiftly-mobile",
    title: "Shiftly Mobile App",
    tagline: "Workforce management on the go",
    description:
      "Workforce management app for shift tracking, attendance and scheduling — built for fast on-the-go use.",
    overview: [
      "Shiftly Mobile is the field companion to the CRM. Employees check in and out, view upcoming shifts and request swaps, while managers approve schedules from anywhere.",
      "Built with React Native + Expo for a smooth native feel on iOS and Android, with an offline-first sync layer so the app keeps working in low-signal environments.",
      "Push notifications keep the team aligned when schedules change, with deep-links straight to the relevant shift.",
    ],
    problem:
      "Field employees lose time checking schedules over chat or email, and managers have no quick way to publish updates.",
    solution:
      "A focused mobile app where employees see today's shift in one tap and managers can publish or change schedules in seconds.",
    features: [
      "Calendar-based shift tracking",
      "One-tap attendance check-in / out",
      "Shift swap requests with approval flow",
      "Push notifications for schedule changes",
      "Offline-ready sync",
      "Biometric login",
    ],
    highlights: [
      { label: "Platforms", value: "iOS + Android" },
      { label: "Cold start", value: "~1.2s" },
      { label: "Crash-free sessions", value: "99.6%" },
    ],
    stack: ["React Native", "Expo", "TypeScript", "Node.js", "SQLite"],
    cover: shiftlyMobile,
    gallery: [shiftlyMobile],
    github: "https://github.com",
    year: "2025",
    role: "Mobile + API",
    status: "Beta",
  },
    {
    id: "TLS-Logistics",
    title: "TLS Logistics",
    tagline: "Web CRM for small workforce-driven teams",
    description:
      "Web-based CRM for small teams: authentication, dashboards, and full CRUD over customers, contracts and activity.",
    overview: [
      "TLS Logistics  centralizes customers, contracts and team activity in one dashboard built for small service businesses that have outgrown spreadsheets.",
      "It includes role-based authentication, real-time KPIs, full CRUD modules and a search/filter layer fast enough to use as a daily driver.",
      "The data model is intentionally simple — customers, contracts, activity — so onboarding a new team takes minutes, not days.",
    ],
    problem:
      "Small workforce-driven businesses track customers and contracts in scattered spreadsheets, losing context and missing follow-ups.",
    solution:
      "A focused CRM with just the right modules — auth, dashboard, customers, contracts, activity — and zero bloat.",
    features: [
      "Email + role-based authentication (admin / member)",
      "Analytics dashboard with KPIs & charts",
      "Customer, contract & activity CRUD",
      "Server-side search, filters and pagination",
      "CSV export of any list view",
      "Audit log of recent activity",
    ],
    highlights: [
      { label: "Modules", value: "6" },
      { label: "Avg. page load", value: "<400ms" },
      { label: "Test coverage", value: "78%" },
    ],
    stack: ["React", "TypeScript", "Node.js", "Express", "SQLite", "Recharts"],
    cover: shiftlyCrm,
    gallery: [shiftlyCrm],
    github: "https://github.com",
    demo: "https://example.com",
    year: "2026",
    role: "Full-stack",
    status: "Live",
  },
  {
    id: "ped-buddy",
    title: "Ped Buddy Mobile App",
    tagline: "Friendly companion for routines & reminders",
    description:
      "A companion mobile app helping users track activity, routines, and reminders with a friendly, focused UI.",
    overview: [
      "Ped Buddy keeps daily routines on track with smart reminders, streaks and gentle progress feedback. The app is designed around clarity and habit formation rather than gamification overload.",
      "All data is stored locally first, so the app stays fast and works offline. Users can opt into cloud sync later without losing history.",
      "The UI focuses on a single primary action per screen, making it usable in seconds even when the user is busy.",
    ],
    problem:
      "Most habit apps overwhelm users with metrics, gamification and notifications they end up muting within a week.",
    solution:
      "A calm, single-purpose companion that nudges users at the right moment and visualizes progress without pressure.",
    features: [
      "Daily routines & checklists",
      "Smart contextual reminders",
      "Streaks and progress visualization",
      "Local-first storage with optional sync",
      "Quiet hours and adaptive notifications",
    ],
    highlights: [
      { label: "Avg. session", value: "42s" },
      { label: "7-day retention", value: "61%" },
      { label: "Bundle size", value: "8.2 MB" },
    ],
    stack: ["React Native", "Expo", "TypeScript", "SQLite"],
    cover: pedBuddy,
    gallery: [pedBuddy],
    github: "https://github.com",
    year: "2026",
    role: "Mobile",
    status: "Released",
  },
];
