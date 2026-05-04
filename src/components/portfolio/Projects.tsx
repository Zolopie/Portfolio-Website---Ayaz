import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  features: string[];
  stack: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "AI Resume Assistant",
    description:
      "A chat-based resume improvement tool that analyzes CVs against job descriptions and returns a match score with actionable suggestions.",
    features: [
      "Conversational CV review",
      "Job-description match score",
      "Targeted rewrite suggestions",
    ],
    stack: ["Node.js", "Express", "OpenAI", "React"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Shiftly CRM",
    description:
      "Web-based CRM for small teams: authentication, dashboards, and full CRUD over customers, contracts and activity.",
    features: ["Auth & roles", "Analytics dashboard", "Full CRUD modules"],
    stack: ["React", "Node.js", "Express", "SQLite"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Shiftly Mobile App",
    description:
      "Workforce management app for shift tracking, attendance and scheduling — built for fast on-the-go use.",
    features: ["Shift tracking", "Attendance check-in", "Smart scheduling"],
    stack: ["React Native", "Expo", "Node.js"],
    github: "https://github.com",
  },
  {
    title: "Ped Buddy Mobile App",
    description:
      "A companion mobile app helping users track activity, routines, and reminders with a friendly, focused UI.",
    features: ["Daily routines", "Smart reminders", "Progress tracking"],
    stack: ["React Native", "Expo", "SQLite"],
    github: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">Projects</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
            Selected work
          </h2>
          <p className="mt-3 text-muted-foreground">
            A few products I've designed and built end-to-end.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <div className="flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-smooth">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} GitHub`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background hover:bg-secondary transition-smooth"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} live demo`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background hover:bg-secondary transition-smooth"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>

              <ul className="mt-5 space-y-1.5">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-foreground/90"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
