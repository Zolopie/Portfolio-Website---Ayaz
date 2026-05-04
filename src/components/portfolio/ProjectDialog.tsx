import { ExternalLink, Github, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import type { Project } from "./projectsData";

type Props = {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ProjectDialog = ({ project, open, onOpenChange }: Props) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border p-0 rounded-2xl">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-border bg-background/80 backdrop-blur hover:bg-secondary transition-smooth"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl bg-secondary">
          <img
            src={project.cover}
            alt={`${project.title} preview`}
            width={1280}
            height={720}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="rounded-full border border-border bg-secondary/60 px-2.5 py-1">
              {project.year}
            </span>
            <span className="rounded-full border border-border bg-secondary/60 px-2.5 py-1">
              {project.role}
            </span>
          </div>

          <DialogTitle className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
            {project.title}
          </DialogTitle>
          <DialogDescription className="mt-1 text-primary text-sm">
            {project.tagline}
          </DialogDescription>

          <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
            {project.longDescription}
          </p>

          <div className="mt-8">
            <h4 className="text-sm font-semibold text-foreground">Key features</h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-foreground/90"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {project.gallery.length > 1 && (
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-foreground">Screens</h4>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {project.gallery.map((src, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-xl border border-border bg-secondary"
                  >
                    <img
                      src={src}
                      alt={`${project.title} screen ${i + 1}`}
                      loading="lazy"
                      width={1280}
                      height={800}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8">
            <h4 className="text-sm font-semibold text-foreground">Tech stack</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-glow transition-smooth shadow-glow"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-smooth"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
