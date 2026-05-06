import aiResume from "@/assets/project-ai-resume.jpg";
import shiftlyCrm from "@/assets/project-shiftly-crm.jpg";
import shiftlyMobile from "@/assets/project-shiftly-mobile.jpg";
import pedBuddy from "@/assets/project-ped-buddy.jpg";
import TLSlogistics from "@/assets/project-TLSlogistics.jpg";

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
    github: "https://github.com/Zolopie/AI-resume-helper",
    demo: "https://ai-resume-helper-bice.vercel.app/",
    year: "2026",
    role: "Full-stack",
    status: "Live",
  },
  {
   id: "shiftly-crm",

title: "Shiftly CRM",

tagline: "Workforce & operations CRM for modern service teams",

description:
  "Modern workforce CRM built for service-based businesses with employee management, scheduling workflows, analytics dashboards, customer tracking, and streamlined operational management.",

overview: [
  "Shiftly CRM centralizes workforce operations, employee activity, customer management, and scheduling workflows into one modern platform designed for fast-growing service businesses.",

  "The platform combines role-based authentication, analytics dashboards, activity tracking, and powerful CRUD systems to simplify day-to-day operations without unnecessary complexity.",

  "Built with scalability and usability in mind, Shiftly helps teams replace scattered spreadsheets and manual coordination with a fast, organized, and responsive operational workflow.",
],
problem:
  "Many workforce-driven businesses manage employees, customers, schedules, and operational tasks across disconnected spreadsheets and messaging platforms, creating inefficiencies, missed updates, and poor visibility across teams.",

solution:
  "Shiftly CRM provides a centralized workforce management platform with scheduling tools, customer tracking, analytics dashboards, and operational workflows — helping businesses improve coordination, productivity, and visibility.",

features: [
  "Secure role-based authentication system",
  
  "Modern analytics dashboard with operational KPIs",
  
  "Employee, customer & activity management",
  
  "Advanced filtering, search & pagination",
  
  "Shift scheduling & workforce tracking workflows",
  
  "Responsive UI optimized for operational teams",
],

highlights: [
  { label: "Core Modules", value: "7+" },
  { label: "Avg. Response Time", value: "<350ms" },
  { label: "Workflow Optimization", value: "+70%" },
],
    stack: ["React", "TypeScript", "Node.js", "Express", "SQLite", "Recharts"],
    cover: shiftlyCrm,
    gallery: [shiftlyCrm],
    github: "https://github.com/Zolopie/Shiftly-Rostering-App",
    demo: "https://shiftly-rostering-app.vercel.app",
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
    github: "https://github.com/Zolopie/Shiftly-Mobile-App",
    demo: "",
    year: "2025",
    role: "Mobile + API",
    status: "Beta",
  },
    {
    id: "TLS-Logistics",
    title: "TLS Logistics",
    tagline: "Smart logistics CRM for workforce-driven operations",

description:
  "Modern logistics CRM designed for small-to-medium transport and workforce teams with contract tracking, dispatch visibility, analytics dashboards, and streamlined operations management.",

overview: [
  "TLS Logistics centralizes workforce operations, contracts, customer records, and logistics activity into one unified platform tailored for modern transport businesses.",
  
  "Built with performance and usability in mind, the system includes secure authentication, real-time analytics dashboards, operational tracking, and powerful CRUD workflows for managing daily logistics tasks efficiently.",

  "The platform reduces manual coordination by simplifying team collaboration, customer management, and contract oversight — helping small logistics businesses scale without operational chaos.",
],

problem:
  "Small logistics and workforce-driven companies often rely on spreadsheets, messaging apps, and disconnected tools to manage contracts, dispatch operations, and customer communication, leading to delays and lost operational visibility.",

solution:
  "TLS Logistics delivers a centralized CRM platform with workforce management, operational dashboards, customer tracking, and streamlined logistics workflows — eliminating unnecessary complexity while improving daily efficiency.",

features: [
  "Secure authentication with admin & staff role management",
  
  "Real-time analytics dashboard with operational KPIs",
  
  "Customer, logistics contract & activity management",
  
  "Advanced search, filtering & pagination system",
  
  "Operational activity tracking & audit history",
  
  "Responsive UI optimized for desktop & tablet workflows",
],

highlights: [
  { label: "Core Modules", value: "8+" },
  { label: "Dashboard Speed", value: "<350ms" },
  { label: "Workflow Efficiency", value: "+65%" },
],
    stack: ["React", "TypeScript", "Node.js", "Express", "SQLite", "Recharts"],
    cover: TLSlogistics,
    gallery: [shiftlyCrm],
    github: "https://github.com/Zolopie/ERP-TLS-Logistics",
    demo: "https://erp-tls-logistics.vercel.app",
    year: "2026",
    role: "Full-stack",
    status: "Live",
  },
  {
    id: "pet-buddy",
    title: "Pet Buddy Mobile App",
    tagline: "Friendly companion for routines & reminders",
    description:
      "A companion mobile app helping users track activity, routines, and reminders with a friendly, focused UI.",
    overview: [
      "Pet Buddy keeps daily routines on track with smart reminders, streaks and gentle progress feedback. The app is designed around clarity and habit formation rather than gamification overload.",
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
    github: "https://github.com/Zolopie/Pet-Buddy-Mobile-App",
    year: "2026",
    role: "Mobile",
    status: "Released",
  },
];
