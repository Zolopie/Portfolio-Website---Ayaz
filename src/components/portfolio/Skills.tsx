import { Database, Layout, Server, Wrench } from "lucide-react";

const groups = [
  { icon: Layout, title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind"] },
  { icon: Server, title: "Backend", items: ["Node.js", "Express", "REST APIs"] },
  { icon: Database, title: "Database", items: ["SQLite", "PostgreSQL"] },
  { icon: Wrench, title: "Tools", items: ["Git", "GitHub", "VS Code", "Figma"] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border/60">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">Skills</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
            Tools I work with
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
