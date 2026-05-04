import { useState } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { projects, type Project } from "./projectsData";
import ProjectDialog from "./ProjectDialog";

const Projects = () => {
  const [active, setActive] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const openProject = (p: Project) => {
    setActive(p);
    setOpen(true);
  };

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">Projects</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
            Selected work
          </h2>
          <p className="mt-3 text-muted-foreground">
            A few products I've designed and built end-to-end. Click any card for
            details, screens and live demos.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.id}
              onClick={() => openProject(p)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openProject(p);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${p.title}`}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={p.cover}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-border bg-background/80 backdrop-blur opacity-0 group-hover:opacity-100 transition-smooth">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="mt-1 text-xs text-primary">{p.tagline}</p>
                  </div>
                  <div
                    className="flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-smooth"
                    onClick={(e) => e.stopPropagation()}
                  >
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

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectDialog project={active} open={open} onOpenChange={setOpen} />
    </section>
  );
};

export default Projects;
